import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/detail/:id/:car?", element: <Detail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
