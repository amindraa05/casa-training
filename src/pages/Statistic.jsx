import React, { useState } from "react";
import BasketballScoring from "../components/BasketballScoring";
import BadmintonScoring from "../components/BadmintonScoring"; //importing the state class from reducer-state.js file. 	//this file contains all the

const Statistic = () => {
  return (
    <>
      <BasketballScoring />
      <BadmintonScoring />
    </>
  );
};

export default Statistic;
