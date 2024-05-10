import Layout from "@/layouts/Layout";
import Auth from "@/pages/auth";
import Dashboard from "@/pages/dashboard";
import AddNewSupplies from "@/pages/dashboard/add-new";
import AllSupplies from "@/pages/dashboard/all-supplies";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-supplies",
        element: <AllSupplies />,
      },
      {
        path: "add-new",
        element: <AddNewSupplies />,
      },
    ],
  },
];

const routerWithLayout = routes.map((route) => {
  return { ...route, element: <Layout>{route.element}</Layout> };
});
const router = createBrowserRouter([...routerWithLayout]);

export default router;
