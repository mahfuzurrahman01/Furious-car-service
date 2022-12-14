import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Main from "../../Layouts/Main/Main";
import Register from "../../Components/Register/Register";
import CheckOut from "../../Components/CheckOut/CheckOut";
import Orders from "../../Components/Orders/Orders";
import Private from "../../Components/Private/Private";

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/checkout/:id',
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element:<Private><CheckOut></CheckOut></Private>
            },
            {
                path:'/orders',
                element:<Private><Orders></Orders></Private>
            }
        ]
    }
])