import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../Shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBook from "../Dashboard/ManageBook";
import EditBook from "../Dashboard/EditBook";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../Components/Logout";
import Cart from "../Pages/Cart";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path:'/Shop',
                element: <Shop/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Blog',
                element: <Blog/>
            },
            {
                path: '/book/:id',
                element: <SingleBook/>,
                loader: async ({ params }) => {
                    const response = await fetch (`http://localhost:5000/book/${params.id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    return data;
                }
            }
        ]
    },
    {
        path: "/cart",
        element: <Cart/>
    },
     {
        path:"/admin/dashboard",
        element: <DashboardLayout/>,
        children:[
            {
                path: "/admin/dashboard",
                element: <PrivateRoute/>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element:<ManageBook/>
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element:<EditBook/>,
                loader: async ({ params }) => {
                    const response = await fetch (`http://localhost:5000/book/${params.id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    return data;
                }
            }
        ]
    },
    {
        path: "/sign-up",
        element: <SignUp/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "logout",
        element: <Logout/>
   }
]);

export default router;