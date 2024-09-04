import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Properties from "../pages/Properties/Properties";

import Login from "../pages/Login/Login";

import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Signup/Signup";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Sidebar from "../components/admin/Sidebar";
import Booking from "../pages/Admin/Booking/Booking";
import PaymentHistory from "../pages/Admin/PaymentHistory/PaymentHistory";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import AddRoom from "../pages/Admin/AddRoom/AddRoom";
import ManageRoom from "../pages/Admin/ManageRoom/ManageRoom";
import DashboardHome from "../pages/Admin/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details-page/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/rooms/room/${params.id}`),
      },
      {
        path: "/property",
        element: <Properties />,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {},
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoutes />,
    children: [
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "payments",
        element: <PaymentHistory />,
      },
      {
        path: "users",
        element: <ManageUser />,
      },
      {
        path: "addroom",
        element: <AddRoom />,
      },
      {
        path: "managerooms",
        element: <ManageRoom />,
      },
    ],
  },
]);
