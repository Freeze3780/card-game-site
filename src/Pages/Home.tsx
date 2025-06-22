import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Home.css";

export default function HomePage() {
	return (
		<div className="grid-layout">
			<Header className="head"/>
			<Sidebar className="side"/>
			<main>Content</main>
		</div>
	);
}