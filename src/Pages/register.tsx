import Button from "../Components/Button/Button";
import InputContainer from "../Components/InputContainer/InputContainer";

export default function RegisterPage() {
	return (
		<form className="form-container">
			<InputContainer label="Email" type="email" placeholder="user@example.com" />
			<InputContainer label="Username" type="text" />
			<InputContainer label="Password" type="password" />
			<InputContainer label="Confirm Password" type="password" />
			<Button to={"#"}>Sign up</Button>
		</form>
	);
}