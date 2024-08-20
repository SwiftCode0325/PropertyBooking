import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

import DetailsPage from "../pages/DetailsPage/DetailsPage";
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

        path: '/details-page/:id',
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch('/api.json')
      }

        path: '/property',
        element: <Properties />
      },

    ]

        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about-us",
        element: <About></About>,
      },
    ],
  },
]);
