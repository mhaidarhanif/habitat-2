import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import {
  HabitsRoute,
  loader as habitsLoader,
  action as habitsAction,
} from "./routes/habits";
import { HabitRoute, loader as habitLoader } from "./routes/habit";

import "./index.css";
import { AboutRoute } from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HabitsRoute />,
        loader: habitsLoader,
        action: habitsAction,
      },
      {
        path: "/about",
        element: <AboutRoute />,
      },
      {
        path: "/habits/:habitId",
        element: <HabitRoute />,
        loader: habitLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
