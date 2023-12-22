import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path:'/',
    element:<MainLayout />,
    errorElement:<ErrorPage />,
    children: [
        {
            path:'/',
            element:<Home />,
        },
        {
            path:'/register',
            element:<Register />,
        },
        {
            path:'/login',
            element:<Login />,
        },
        {
            path:'/contact',
            element:<Contact />,
        },
        {
            path:'/about',
            element:<About />,
        },
    ]
    }

])


export default router;