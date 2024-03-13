import Layout from "./Layout";
import "./globals.css";
import Home from "./app/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./app/Checkout";
import Finish from "./app/Finish";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout/finish/",
        element: <Finish />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
