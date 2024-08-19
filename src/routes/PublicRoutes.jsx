import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/property',
        element: <Properties />
      },
    ]
  },
]);
