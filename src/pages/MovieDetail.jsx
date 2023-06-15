import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const URL_PATH = "https://image.tmdb.org/t/p/original/";

  const getMovieDetail = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [movie]);

  return (
    <>
      <Sidebar />
      <div className="container w-2/4 mx-auto">
        <h1 className="p-5 text-4xl font-bold">Detail Movie</h1>
        <div
          className="flex justify-between px-5 py-5 m-5 rounded shadow-md"
          key={movie.id}
        >
          <img src={`${URL_PATH}${url}`} alt="movie-picture" />
          <div className="ml-5">
            <h1 className="text-3xl font-bold text-left">{movie.title}</h1>
            <h4 className="mt-3 text-lg">Avg Vote: {movie.vote_average}</h4>
            <p className="mt-3">{movie.overview}</p>
            <p className="mt-3 text-lg">Tagline: {movie.tagline}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
