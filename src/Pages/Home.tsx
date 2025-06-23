import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Home.css";
import { useEffect } from "react";

export default function HomePage() {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!location.state){
			navigate("/login");
		}
	}, [location.state, navigate])

	return (
		<div className="grid-layout">
			<Header className="head"/>
			<Sidebar className="side"/>
			<main>Content</main>
		</div>
	);
}