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
        loader: () => fetch("/api.json"),
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
        element: <Dashboard />,
      },
      {
        path: "sidebar",
        element: <Sidebar />,
      },
    ],
  },
]);
