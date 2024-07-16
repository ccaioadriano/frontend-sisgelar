import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, NotFound } from "../pages";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
