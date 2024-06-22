import Home from "@/pages";
import DetailMovie from "@/pages/detail-movie";
import Favorite from "@/pages/favorite";
import ListNowPlaying from "@/pages/list-now-playing";
import ListPopular from "@/pages/list-popular";
import ListTopRated from "@/pages/list-top-rated";
import ListUpcoming from "@/pages/list-upcoming";
import Login from "@/pages/login";
import SearchMovie from "@/pages/search-movie";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail-movie/:movie_id",
      element: <DetailMovie />,
    },
    {
      path: "/movie/popular",
      element: <ListPopular />,
    },
    {
      path: "/movie/top_rated",
      element: <ListTopRated />,
    },
    {
      path: "/movie/now_playing",
      element: <ListNowPlaying />,
    },
    {
      path: "/movie/upcoming",
      element: <ListUpcoming />,
    },
    {
      path: "/search/:query",
      element: <SearchMovie />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}
