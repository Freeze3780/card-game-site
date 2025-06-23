import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";

import './index.css'

import LoginPage from './Pages/login';
import PageNotFound from './Pages/PageNotFound';
import RegisterPage from './Pages/register';
import HomePage from './Pages/Home';
import Test from './Pages/Test';

function loginRedirect(){
	return redirect("/login")
}

const router = createBrowserRouter([
	{path: "*", element: <PageNotFound />},
	{path: "/test", element: <Test />},
	{path: "/", loader: loginRedirect},
	{path: "/login", element: <LoginPage />},
	{path: "/register", element: <RegisterPage />},
	{path: "/home", element: <HomePage />},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
)
