import { createContext } from "react";

const CounterContext = createContext({});

const CounterProvider = ({ children }) => {
  return (
    <div>
      <CounterContext>{children}</CounterContext>
    </div>
  );
};

