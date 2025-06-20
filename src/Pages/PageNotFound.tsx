import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";

export default function PageNotFound() {
	return (
		<div className="flex-centered-container">
			<h1>404 Page Not Found</h1>
			<Link to={"/"}>
				<Button>Go Back Home</Button>
			</Link>
		</div>
	);
}