import React, { useState } from "react";
import CounterContext from "./CounterContext";

const CounterState = (props) => {
  const [counter, setCounter] = useState();

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterState;
