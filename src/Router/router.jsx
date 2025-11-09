import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Shared Component/Error/ErrorPage";
import Home from "../Pages/Home";
import ProtectedRouts from "./ProtectedRouts";
import Movies from "../Pages/movies";
import MyCollection from "../Pages/MyCollection";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import WatchList from "../Pages/WatchList";
import MovieDetails from "../Pages/MovieDetails";
import AddMovie from "../Pages/AddMovie";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-movies",
        element: <Movies />,
      },
      {
        path: "/movies/my-collection",
        element: (
          <ProtectedRouts>
            <MyCollection />
          </ProtectedRouts>
        ),
      },
      {
        path: "/movies/my-watchlist",
        element: (
          <ProtectedRouts>
            <WatchList />
          </ProtectedRouts>
        ),
      },
      {
        path: "/movies/:id",
        element: (
          <ProtectedRouts>
            <MovieDetails />
          </ProtectedRouts>
        ),
      },
      {
        path: "/add-movies",
        element: (
          <ProtectedRouts>
            <AddMovie />
          </ProtectedRouts>
        ),
      },
      {
        path:"/login",
        Component: Login
      },
      {
        path:"/register",
        Component: Register
      }
      
    ],
  },
]);

export default router;
