import Layout from "./components/Layout";
import "./globals.css";
import Home from "./app/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./app/Checkout/Checkout";

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
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
