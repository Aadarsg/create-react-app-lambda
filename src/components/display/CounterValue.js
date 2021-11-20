import "./CounterValue.css";
import React from "react";
import { useContext } from "react";
import CounterContext from "../../context/CounterContext";

function CounterValue() {
  const [counter] = useContext(CounterContext);
  return (
    <div className="CounterValue">
      <span>Counter value:</span>
      <span>{`${counter}`}</span>
    </div>
  );
}

export default CounterValue;
