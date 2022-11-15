import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import SignUp from "../../pages/Home/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])