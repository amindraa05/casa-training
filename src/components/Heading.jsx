import React from "react";
import { useContext } from "react";

const Heading = ({ level, children }) => {
  const level = useContext(level);
  console.log(level);
  if (level === 1) {
    return <h1> {children} </h1>;
  }
  if (level === 2) {
    return <h1> {children} </h1>;
  }
  if (level === 3) {
    return <h1> {children} </h1>;
  }
  if (level === 4) {
    return <h1> {children} </h1>;
  }
  if (level === 5) {
    return <h1> {children} </h1>;
  }
  if (level === 6) {
    return <h1> {children} </h1>;
  }
  return <div>Heading</div>;
};

export default Heading;
