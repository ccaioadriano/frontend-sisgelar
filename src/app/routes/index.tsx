import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, NotFound } from "../pages";
import { Equipments } from "../pages/Equipments/Equipments";

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
    path: "filial/:branch_id",
    children: [
      {
        path: "equipamentos",
        element: <Equipments />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
