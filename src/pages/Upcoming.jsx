import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import MovieCards from "./MovieCards";
import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  const getUpcoming = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGJkMzA0YjVmOWY5YjRjYzNkMGJmODBkOTFhYTQ3NSIsInN1YiI6IjYwYzg5MmQ4YzM5MGM1MDA3OWQ5ZTUzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJIaURNmlo1LugVCyB2TUwK_H1FUW5j2-55BcQ3p3sg",
      },
    };

    try {
      const response = await axios.get(url, options);
      const { data } = response;
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpcoming();
  }, [movies]);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Fragment>
          <Typography variant="h2">Upcoming Movies</Typography>
        </Fragment>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {movies.map((movie) => (
            <MovieCards
              key={movie.id}
              url={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
