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
import { Provider } from "react-redux";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "nowplaying/:idmovie",
    element: <MovieDetail />,
  },
  {
    path: "popular/:idmovie",
    element: <MovieDetail />,
  },
  {
    path: "upcoming/:idmovie",
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {/* <MainNavbar /> */}
    <Navbar />
    <RouterProvider router={router} />
  </ThemeProvider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <ThemeProvider>
//       <Navbar />
//       <RouterProvider router={router} />
//     </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );
