import { useRef, useState, useEffect } from "react";
import supabase from "../../utils/supabase";
import { hashPassword } from "../../utils/password.ts";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import type { User } from "../../utils/types.ts";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const [password, setPassword] = useState("");
	const passwordRef = useRef<HTMLInputElement>(null);
	
	const [confirmPassword, setConfirmPassword] = useState("");
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	// * Change border color on password field mismatch
	useEffect(() => {
		if (passwordRef.current && confirmPasswordRef.current){
			if (password !== confirmPassword && password !== "" && confirmPassword !== ""){
				passwordRef.current.style.borderColor = "crimson";
				confirmPasswordRef.current.style.borderColor = "crimson";
			} else {
				passwordRef.current.style.borderColor = "";
				confirmPasswordRef.current.style.borderColor = "";
			}
		}
	}, [password, confirmPassword]);

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
		if (password !== confirmPassword){
			return false;
		}

		console.log(
			email,
			name,
			password
		);

		// * Checking if the email is already registered or if the username is already used 
		const { data } = await supabase
		.from('users')
		.select()
		.or(`email.eq.${email},name.eq.${name}`)
		.overrideTypes<Array<User>, { merge: false }>();

		if (data !== null){
			for (let user of data){
				if (user.email === email){
					console.error("Email already registered");
					return false;
				}
				if (user.name === name){
					console.error("Username already used");
					return false;
				}
			}
		}

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
		<form className="form-container" onSubmit={submitHandler}>
			<Input label="Email"
				value={email}
				type="email"
				placeholder="user@example.com"
				onChange={emailChangeHandler}
			/>
			<Input label="Username"
				type="text"
				onChange={nameChangeHandler}
				value={name}
			/>
			<Input label="Password"
				type="password"
				ref={passwordRef}
				onChange={passwordChangeHandler}
				value={password}
			/>
			<Input label="Confirm Password" 
				type="password"
				ref={confirmPasswordRef}
				onChange={confirmPasswordChangeHandler}
				value={confirmPassword}
			/>
			<Button>Sign up</Button>
		</form>
	);
}