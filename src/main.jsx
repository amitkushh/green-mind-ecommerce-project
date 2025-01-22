import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
