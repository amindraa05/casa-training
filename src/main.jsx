import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import NowPlaying from "./pages/NowPlaying";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nowplaying",
    element: <NowPlaying />,
  },
  {
    path: "/toprated",
    element: <TopRated />,
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/moviedetail/:id",
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <MainNavbar /> */}
      <Navbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
