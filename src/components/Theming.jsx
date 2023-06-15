import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "@material-tailwind/react";

const Theming = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: isLight ? "white" : "black",
      }}
    >
      <h1 style={{ color: isLight ? "black" : "white" }}>Theming</h1>
      <Button
        onClick={() => setIsLight(isLight === "white" ? "black" : "white")}
      >
        Change Theme
      </Button>
    </div>
  );
};

export default Theming;
