import React from "react";
import { ReducerState } from "../components/ReducerState";
import Heading from "../components/Heading";
import { LevelProvider, LevelContext } from "../contexts/LevelContext";

const CMS = () => {
  return (
    <>
      <LevelProvider>
        <Heading> Counter </Heading>
      </LevelProvider>

      <LevelProvider>
        <Heading level={2}> Counter </Heading>
        <Heading level={2}> Counter </Heading>
        <Heading level={2}> Counter </Heading>
      </LevelProvider>

      <Heading level={3}> Counter </Heading>
      <Heading level={4}> Counter </Heading>
      <Heading level={5}> Counter </Heading>
    </>
  );
};

export default CMS;
