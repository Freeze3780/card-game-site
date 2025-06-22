import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import LoginPage from './Pages/login';
import PageNotFound from './Pages/PageNotFound';
import RegisterPage from './Pages/register';
import HomePage from './Pages/Home';

const router = createBrowserRouter([
	{path: "*", element: <PageNotFound />},
	{path: "/", element: <LoginPage />},
	{path: "/login", element: <LoginPage />},
	{path: "/register", element: <RegisterPage />},
	{path: "/home", element: <HomePage />},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
)
