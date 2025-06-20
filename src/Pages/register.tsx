import { useRef, useState, useEffect } from "react";
import { hashPassword } from "../../utils/password.ts";
import type { User } from "../../utils/types.ts";

import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import supabase from "../../utils/supabase";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [emailInfo, setEmailInfo] = useState("");

	const [name, setName] = useState("");
	const [nameInfo, setNameInfo] = useState("");

	const [passwordInfo, setPasswordInfo] = useState("");
	const [password, setPassword] = useState("");
	const passwordRef = useRef<HTMLInputElement>(null);
	
	const [confirmPassword, setConfirmPassword] = useState("");
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	// * Change border color on password field mismatch
	useEffect(() => {
		if (passwordRef.current && confirmPasswordRef.current){
			if (password !== confirmPassword && password !== "" && confirmPassword !== ""){
				setPasswordInfo("These Field must match");
				passwordRef.current.style.borderColor = "var(--danger)";
				confirmPasswordRef.current.style.borderColor = "var(--danger)";
			} else {
				setPasswordInfo("");
				passwordRef.current.style.borderColor = "";
				confirmPasswordRef.current.style.borderColor = "";
			}
		}
	}, [password, confirmPassword]);

	// * Remove errors when values are changed
	useEffect(() => {
		setEmailInfo("");
		setNameInfo("");
	}, [email, name]);

	function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	};

	function nameChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setName(e.target.value)
	};

	function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	};

	function confirmPasswordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setConfirmPassword(e.target.value)
	};

	async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setEmailInfo("");
		setNameInfo("");
		setPasswordInfo("");
		if ([email, name, password, confirmPassword].includes("")){
			setEmailInfo("All Fields are Requiered");
			return false;
		}

		if (password !== confirmPassword){
			return false;
		}

		console.log(
			email,
			name,
			password
		);

		// * Checking if the email is already registered or if the username is already used 
		let pass = true;
		setEmailInfo("");
		{
			const { data } = await supabase
			.from('users')
			.select()
			.eq('email', email)
			.overrideTypes<Array<User>, { merge: false }>();
			
			if (data !== null){
				setEmailInfo("Email already Registered");
				pass = false;
			}
		}
		
		setNameInfo("");
		{
			const { data } = await supabase
				.from('users')
				.select()
				.eq('name', name)
				.overrideTypes<Array<User>, { merge: false }>();
			
			if (data !== null){
				setNameInfo("Username already in use");
				pass = false;
			}
		}

		if (!pass) return false

		// * Inserting User into the DB
		const { error } = await supabase
			.from('users')
			.insert({ 
				email: email,
				name: name,
				password: await hashPassword(password)
			});
		if (error) console.error(error);
		else console.log("Row inserted succesfully");
	}

	return (
		<div className="flex-centered-container">
			<form className="column-card" onSubmit={submitHandler}>
				<Input label="Email"
					value={email}
					type="email"
					placeholder="user@example.com"
					onChange={emailChangeHandler}
					info={emailInfo}
					infoClass="danger-text"
				/>
				<Input label="Username"
					type="text"
					onChange={nameChangeHandler}
					value={name}
					info={nameInfo}
					infoClass="danger-text"
				/>
				<Input label="Password"
					type="password"
					ref={passwordRef}
					onChange={passwordChangeHandler}
					value={password}
					info={passwordInfo}
					infoClass="danger-text"
				/>
				<Input label="Confirm Password"
					type="password"
					ref={confirmPasswordRef}
					onChange={confirmPasswordChangeHandler}
					value={confirmPassword}
					info={passwordInfo}
					infoClass="danger-text"
				/>
				<Button>Sign up</Button>
			</form>
		</div>
	);
}