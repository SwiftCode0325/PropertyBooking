import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home/Home";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

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
        path: '/details-page/:id',
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch('/api.json')
      }
    ]
  },
]);
