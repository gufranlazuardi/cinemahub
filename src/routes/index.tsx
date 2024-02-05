import Home from "@/pages";
import DetailMovie from "@/pages/detail-movie";
import ListFeature from "@/pages/list-feature";
import ListNowPlaying from "@/pages/list-now-playing";
import ListTopRated from "@/pages/list-top-rated";
import ListUpcoming from "@/pages/list-upcoming";
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
    {
      path: "/list-feature",
      element: <ListFeature />,
    },
    {
      path: "/list-top-rated",
      element: <ListTopRated />,
    },
    {
      path: "list-now-playing",
      element: <ListNowPlaying />,
    },
    {
      path: "list-upcoming",
      element: <ListUpcoming />,
    },
  ]);

  return <RouterProvider router={router} />;
}
