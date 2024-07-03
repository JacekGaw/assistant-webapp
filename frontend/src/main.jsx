import React from "react";
import UserContextProvider from "./store/user-context";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import "./index.css";
import ErrorPage from "./pages/404/ErrorPage";
import Login from "./pages/Hero/Login";
import Signup from "./pages/Hero/Signup";
import ProtectedRoute, {loader as CheckUser} from "./components/ProtectedRoute";
import PanelRoot from "./pages/Panel/PanelRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/panel",
    element: <ProtectedRoute />, // This will protect /panel and its sub-routes
    loader: CheckUser,
    children: [
      {
        path: "",
        element: <PanelRoot />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
