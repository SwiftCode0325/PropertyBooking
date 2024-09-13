import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Properties from "../pages/Properties/Properties";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Signup/Signup";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import DashHome from "../pages/Dashboard/Home/DashHome";
import Booking from "../pages/Dashboard/Booking/Booking";
import ManageRooms from "../pages/Dashboard/ManageRooms/ManageRooms";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddRoom from "../pages/Dashboard/AddRoom/AddRoom";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import Features from "../components/common/Features/Features";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "",
        element: <DashHome />,
      },
      {
        path: 'user_profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "add_room",
        element: <AddRoom />,
      },
      {
        path: "manage_rooms",
        element: <ManageRooms />,
      },
      {
        path: "manage_users",
        element: <ManageUsers />,
      },
      {
        path: "payment_history",
        element: <PaymentHistory />,
      },
    ],
  },
]);
