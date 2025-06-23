import { useState, useEffect } from 'react';
import { verifyPassword } from "../../utils/password.ts";

import A from '../Components/A/A.tsx';
import Input from '../Components/Input/Input.tsx';
import supabase from '../../utils/supabase.ts';
import PrimaryButton from '../Components/Buttons/PrimaryButton/PrimaryButton.tsx';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from '../Components/Card/Card.tsx';


export default function LoginPage() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [emailInfo, setEmailInfo] = useState("");

	const [password, setPassword] = useState("");
	const [passwordInfo, setPasswordInfo] = useState("");
	
	useEffect(() => {
		setEmailInfo("");
		setPasswordInfo("");
	}, [email, password]);

	function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}

	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setEmailInfo("");
		setPasswordInfo("");
		if ([email, password].includes("")){
			setEmailInfo("All Fields are Requiered");
			return false;
		}

		const { data } = await supabase
			.from("users")
			.select()
			.eq("email", email)
			.single();

		if (data === null){
			setEmailInfo("Email Not Registered");
			return false;
		}

		if (await verifyPassword(password, data.password)){
			navigate("/home", { state: data });
			return true;
		}else {
			setPasswordInfo("Incorrect Password");
			return false;
		}
	}

	return (
		<div className='center'>
			<Card>
				<form onSubmit={submitHandler}>
					<CardHeader>Login</CardHeader>
					<CardContent>
						<Input value={email} onChange={emailChangeHandler} label="Email" type="email" placeholder="user@example.com" info={emailInfo} infoClass='danger-text' />
						<Input value={password} onChange={passwordChangeHandler} label="Password" type="password" info={passwordInfo} infoClass='danger-text' />
						<A to='#' text="Forgot your password?" />
					</CardContent>
					<CardFooter>
						<PrimaryButton
							type='submit'
							text="Login"
						/>
					</CardFooter>
					<A to="/register" text="Don't have an account? Sign up"/>
				</form>
			</Card>
		</div>
	);
}