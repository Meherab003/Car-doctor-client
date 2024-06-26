import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: '/services/:id',
        element: <ServicesPage></ServicesPage>,
        loader: ({ params }) => fetch(`https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/services/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },
]);

export default router;
