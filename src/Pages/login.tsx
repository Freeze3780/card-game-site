import { useState } from 'react';
import { verifyPassword } from "../../utils/password.ts";
import type { User } from "../../utils/types.ts";
import Button from '../Components/Button/Button.tsx';
import A from '../Components/A/A.tsx';
import Input from '../Components/Input/Input.tsx';
import supabase from '../../utils/supabase.ts';


export default function LoginPage() {
	// console.log("Hello");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
		// console.log(email);
	}

	function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
		// console.log(password);
	}

	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const { data, error } = await supabase
			.from("users")
			.select()
			.eq("email", email)
		if (error) console.error(error);
		else console.log(data);

		if (data === null){
			//TODO
			console.error("email not registered");
			return false;
		}
		const user: User = {...data[0]};
		if (await verifyPassword(password, user.password)){
			//TODO
			return true;
		}else {
			//TODO
			console.error("wrong password");
			return false;
		}
	}

	return (
		<form className="form-container" onSubmit={submitHandler}>
			<Input value={email} onChange={emailChangeHandler} label="Email" type="email" placeholder="user@example.com" />
			<Input value={password} onChange={passwordChangeHandler} label="Password" type="password" />
			<A to='#' text="Forgot your password?" />
			<Button>Login</Button>
			<A to="/register" text="Don't have an account? Sign up"/>
		</form>
	);
}