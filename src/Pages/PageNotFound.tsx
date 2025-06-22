import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Buttons/PrimaryButton/PrimaryButton";

export default function PageNotFound() {
	return (
		<div className="flex-centered-container">
			<h1>404 Page Not Found</h1>
			<Link to={"/"}>
				<PrimaryButton text="Go Back Home"/>
			</Link>
		</div>
	);
}