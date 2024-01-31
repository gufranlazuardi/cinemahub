import Home from "@/pages";
import DetailMovie from "@/pages/movie/detail-movie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail-movie",
      element: <DetailMovie />,
    },
  ]);

  return <RouterProvider router={router} />;
}
