import React, { useState } from "react";
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

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();


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
			<Button to={"#"}>Sign up</Button>
		</form>
	);
}