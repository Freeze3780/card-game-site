import InputContainer from '../Components/Input/Input.tsx';
import Button from '../Components/Button/Button.tsx';
import { Link } from 'react-router-dom';
import A from '../Components/A/A.tsx';


export default function LoginPage() {
	return (
		<form className="form-container">
			<InputContainer label="Email" type="email" placeholder="user@example.com" />
			<InputContainer label="Password" type="password" />
			<A to='#' text="Forgot your password?" />
			<Link to='#'>
				<Button to='#'>Login</Button>
			</Link>
			<A to="/register" text="Don't have an account? Sign up"/>
		</form>
	);
}