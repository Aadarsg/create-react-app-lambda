import "./App.css";
import Counter from "./components/counter/Counter";
import { useContext } from "react";
import CounterContext from "./context/CounterContext";
import CounterValue from "./components/display/CounterValue";
import InputState from "./context/InputState";
import LoadingState from "./context/LoadingState";
import MaxCounterState from "./context/MaxCounterState";

function App() {
  const [counter] = useContext(CounterContext);

  return (
    <InputState>
      <LoadingState>
        <MaxCounterState>
          <div className="App container">
            <Counter></Counter>
            <CounterValue counterVlaue={counter}></CounterValue>
          </div>
        </MaxCounterState>
      </LoadingState>
    </InputState>
  );
}

export default App;
