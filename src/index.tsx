import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import * as page from "./pages/pages";

const router = createBrowserRouter([
  //auth
  {
    path: "/auth/login",
    element: <page.Login />,
  },
  {
    path: "/auth/register",
    element: <page.Register />,
  },

  //user
  {
    path: "/user",
    element: <page.UserGetAll />,
  },
  {
    path: "/user/:id",
    element: <page.UserGet/>,
  },
  {
    path: "/user/create",
    element: <page.UserCreate />,
  },
  {
    path: "/user/update/:id",
    element: <page.UserUpdate />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <main className="w-screen h-screen">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
