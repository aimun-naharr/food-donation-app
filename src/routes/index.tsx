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
    globalLayout: true,
  },
  {
    path: "/auth",
    element: <Auth />,
    globalLayout: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    globalLayout: false,
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
  if (route.globalLayout) {
    return { ...route, element: <Layout>{route.element}</Layout> };
  } else return { ...route };
});
const router = createBrowserRouter([...routerWithLayout]);

export default router;
