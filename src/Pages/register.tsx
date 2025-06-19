import React, { useState } from "react";
import supabase from "../../utils/supabase";
import { hashPassword } from "../../utils/password.ts";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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

		if (password != confirmPassword){
			//TODO: implement style changes
			console.error("passwords don't match");
			return false;
		}

		console.log(
			email,
			name,
			password
		);

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
		<form className="form-container" onSubmit={submitHandler}>
			<Input
				value={email}
				label="Email" 
				type="email" 
				placeholder="user@example.com"
				onChange={emailChangeHandler}
			/>
			<Input label="Username" type="text" onChange={nameChangeHandler} value={name} />
			<Input label="Password" type="password" onChange={passwordChangeHandler} value={password}/>
			<Input label="Confirm Password" type="password" onChange={confirmPasswordChangeHandler} value={confirmPassword} />
			<Button>Sign up</Button>
		</form>
	);
}