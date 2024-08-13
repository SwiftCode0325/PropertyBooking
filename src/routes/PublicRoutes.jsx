import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);
