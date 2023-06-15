import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
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
      <div className="p-4 sm:ml-64">
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img src={`${URL_PATH}${movieId}`} alt="movie-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {movie.title}
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              {movie.vote_average}
            </Typography>
            <Typography variant="h6" color="black" className="mb-2">
              {movie.overview}
            </Typography>
            <Typography variant="h6" color="black" className="mb-2">
              {movie.tagline}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MovieDetail;
