import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";
import { Tariffs } from "../pages/Tariffs/Tariffs";
import { Lk } from "../pages/Lk/Lk";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Upload } from "../pages/Upload/Upload";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout><Home /></MainLayout>,
      index: true,
    },
    {
      path: '/tariffs',
      element: <MainLayout><Tariffs /></MainLayout>,
    },
    {
      path: '/upload',
      element: <MainLayout><Upload /></MainLayout>
    },
    {
      path: '/lk',
      element: <MainLayout><Lk /></MainLayout>,
    },
    {
      path: '/404',
      element: <MainLayout><ErrorPage /></MainLayout>
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ])

  return routes;
}