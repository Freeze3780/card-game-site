import './login.css';
import InputContainer from '../Components/InputContainer/InputContainer.tsx';
import Button from '../Components/Button/Button.tsx';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	return (
		<Link to={"#"} className="link">Forgot your password?</Link>
	);
}
function SignUp() {
	return (
		<Link to={"#"} className="link">Don't have an account? Sign up</Link>
	);
}

export default function LoginPage() {
	return (
		<form className="container">
			<InputContainer label="Email" type="email" placeholder="user@example.com" />
			<InputContainer label="Password" type="password" />
			<ForgotPassword />
			<Link to={"#"}>
				<Button>Login</Button>
			</Link>
			<SignUp />
		</form>
	);
}