import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";



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
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    }
])