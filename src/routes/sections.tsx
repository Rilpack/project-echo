import { useRoutes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Lk } from "../pages/Lk/Lk";
import MainLayout from "../layout/MainLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout><Home /></MainLayout>,
      index: true,
    },
    {
      path: '/lk',
      element: <MainLayout><Lk /></MainLayout>,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

  return routes;
}