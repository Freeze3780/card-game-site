import "./Home.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Card, CardHeader, CardDescription, CardFooter, CardSpacer } from "../Components/Card/Card";
import PrimaryButton from "../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Components/Buttons/SecondaryButton/SecondaryButton";
import type { User } from "../../utils/types";

export default function HomePage() {
	const location = useLocation();
	const navigate = useNavigate();
	
	// * If the User isn't logged in they get redirected 
	useEffect(() => {
		if (!location.state){
			navigate("/login");
		}
	}, [location.state, navigate])
	
	const user: User = location.state


	return (
		<div className="grid-layout">
			<Header 
				className="head"
				username={user.name}
			/>
			<Sidebar className="side"/>
			<main>
				<Card>
					<CardHeader>Test</CardHeader>
					<CardDescription>Description text</CardDescription>
					<CardSpacer />
					<CardFooter>
						<PrimaryButton
							text="Play"
						/>
						<SecondaryButton
							text="Details"
						/>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>Test</CardHeader>
					<CardDescription>Description text</CardDescription>
					<CardSpacer />
					<CardFooter>
						<PrimaryButton
							text="Play"
						/>
						<SecondaryButton
							text="Details"
						/>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>Test</CardHeader>
					<CardDescription>Description text</CardDescription>
					<CardSpacer />
					<CardFooter>
						<PrimaryButton
							text="Play"
						/>
						<SecondaryButton
							text="Details"
						/>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>Test</CardHeader>
					<CardDescription>Description text</CardDescription>
					<CardSpacer />
					<CardFooter>
						<PrimaryButton
							text="Play"
						/>
						<SecondaryButton
							text="Details"
						/>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}