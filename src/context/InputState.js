import { useState } from "react";
import InputContext from "./InputContext";

const InputState = (props) => {
  const [input, setInput] = useState("");
  return (
    <InputContext.Provider value={[input, setInput]}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
