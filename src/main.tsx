import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Pages/login';
import PageNotFound from './Pages/PageNotFound';
import RegisterPage from './Pages/register';

const router = createBrowserRouter([
	{path: "*", element: <PageNotFound />},
	{path: "/", element: <LoginPage />},
	{path: "/login", element: <LoginPage />},
	{path: "/register", element: <RegisterPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
