import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<>
			<h1>404 Not Found</h1>
			<Link to={"/"}>
				<button>Go Back Home</button>
			</Link>
		</>
	);
}