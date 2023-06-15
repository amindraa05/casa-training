import React from "react";
import Sidebar from "../components/Sidebar";

const MovieDetail = ({ id, url, title, date }) => {
  console.log(title);
  console.log(url);
  return (
    <>
      <Sidebar />
      <p>{title}</p>
    </>
  );
};

export default MovieDetail;
