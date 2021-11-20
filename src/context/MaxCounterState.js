import React, { useState } from "react";
import MaxCounterContext from "./MaxCounterContext";

const MaxCounterState = (props) => {
  const [maxCounter, setMaxCounter] = useState();

  return (
    <MaxCounterContext.Provider value={[maxCounter, setMaxCounter]}>
      {props.children}
    </MaxCounterContext.Provider>
  );
};
export default MaxCounterState;
