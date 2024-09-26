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
import Blog from "../components/common/FeaturesDropDown/Blog";
import Gallery from "../components/common/FeaturesDropDown/Gallery";
import EditRooms from "../pages/Dashboard/EditRooms/EditRooms";
import AdminOwnerPrivate from "./AdminOwnerPrivate";
import AdminPrivate from "./AdminPrivate";
import Private from "./Private";
import TotalBookings from "../pages/Dashboard/TotalBookings/TotalBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details-page/:id",
        element: <Private><DetailsPage></DetailsPage></Private>,
        loader: ({ params }) => fetch(`https://room-backend-final-main.vercel.app/api/rooms/room/${params.id}`),
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
      {
        path: 'user_profile',
        element: <Private><UserProfile></UserProfile></Private>
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Private><DashBoardLayout /></Private>,
    errorElement: "error",
    children: [
      {
        path: "",
        element: <Private><DashHome /></Private>,
      },

      {
        path: "booking",
        element: <Private><Booking /></Private>,
      },
      {
        path: "add_room",
        element: <AdminOwnerPrivate><AddRoom /></AdminOwnerPrivate>,
      },
      {
        path: "manage_rooms",
        element: <AdminOwnerPrivate><ManageRooms /></AdminOwnerPrivate>,
      },
      {
        path: "manage_users",
        element: <AdminPrivate><ManageUsers /></AdminPrivate>,
      },
      {
        path: "total_bookings",
        element: <AdminPrivate><TotalBookings /></AdminPrivate>,
      },
      {
        path: "payment_history",
        element: <Private><PaymentHistory /></Private>,
      },
      {
        path: "edit_room/:id",
        element: <AdminOwnerPrivate><EditRooms /></AdminOwnerPrivate>,
        loader: ({ params }) => fetch(`https://room-backend-final-main.vercel.app/api/rooms/room/${params.id}`),
      },
    ],
  },
]);
