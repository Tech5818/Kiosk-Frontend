import { HomePage } from "@pages/home/ui";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
