import { useState, useEffect } from "react";
import { createContext } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const value = {
    isLight,
    setIsLight,
  };
  return (
    <div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext };
export default ThemeProvider;
