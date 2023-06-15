import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MovieCards = ({ id, url, title, date }) => {
  const URL_PATH = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={`${URL_PATH}${url}`} alt="movie-picture" />
        </CardHeader>
        <Link to={`${id}`}>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              {date}
            </Typography>
          </CardBody>
        </Link>
      </Card>
    </>
  );
};

export default MovieCards;
