import { useState } from 'react';
import Button from '../Components/Button/Button.tsx';
import A from '../Components/A/A.tsx';
import Input from '../Components/Input/Input.tsx';


export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
			setEmail(e.target.value)
	};

	function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
			setPassword(e.target.value)
	};

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
			e.preventDefault();
			
	}

	return (
		<form className="form-container" onSubmit={submitHandler}>
			<Input value={email} onChange={emailChangeHandler} label="Email" type="email" placeholder="user@example.com" />
			<Input value={password} onChange={passwordChangeHandler} label="Password" type="password" />
			<A to='#' text="Forgot your password?" />
			<Button to='#'>Login</Button>
			<A to="/register" text="Don't have an account? Sign up"/>
		</form>
	);
}