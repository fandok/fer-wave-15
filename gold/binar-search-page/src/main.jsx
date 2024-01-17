import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/detail/:id/:car?", element: <Detail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
