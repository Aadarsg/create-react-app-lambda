import Alert from "../alert/Alert";
import "./Counter.css";
import Button from "../ui/controls/Button";
import Display from "../display/Display";
import { useContext, useEffect, useRef } from "react";
import CounterContext from "../../context/CounterContext";
import InputContext from "../../context/InputContext";
import LoadingContext from "../../context/LoadingContext";
import axios from "axios";
import MaxCounterContext from "../../context/MaxCounterContext";

const fillPrimary = "fill-primary";
const fillSecondary = "fill-secondary";

function Counter() {
  const [counter, setCounter] = useContext(CounterContext);
  const [input, setInput] = useContext(InputContext);
  const [loadingStatus, setLoadingStatus] = useContext(LoadingContext);
  const [maxCounter, setMaxCounter] = useContext(MaxCounterContext);
  const mounted = useRef();

  //Hooks
  useEffect(() => {
    if (!mounted.current) {
      axios
        .get(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
        )
        .then((response) => {
          if (response.data === null) {
            setCounter(1);
            setMaxCounter(1000);

            console.log("Counter initialised with 1");
          } else {
            setCounter(response.data);
            setMaxCounter(response.data);

            console.log(`Counter initialised with ${response.data}`);
          }
        })
        .catch((error) => console.log(error));
      mounted.current = true;
    } else {
      (async () => {
        // PUT request using axios with async/await
        const article = { aadarsh: counter };
        const response = await axios.put(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
          article
        );
      })();
    }
  });

  // Handlers
  const additionClickHandler = (e) => {
    if (counter + 1 && counter + Number(input) <= maxCounter) {
      if (input === "") {
        setCounter(counter + 1);
        (async () => {
          setLoadingStatus(true);
          const article = {
            aadarsh: counter,
          };
          await axios.put(
            "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
            article
          );

          setLoadingStatus(false);
        })();
      } else {
        setCounter(counter + Number(input));
        (async () => {
          setLoadingStatus(true);
          const article = {
            aadarsh: counter,
          };
          await axios.put(
            "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
            article
          );

          setLoadingStatus(false);
        })();
      }
    }
  };

  const subtractionClickHandler = async (e) => {
    if (input === "") {
      setCounter(counter - 1);
      (async () => {
        setLoadingStatus(true);
        const article = {
          aadarsh: counter,
        };
        await axios.put(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
          article
        );

        setLoadingStatus(false);
      })();
    } else {
      setCounter(counter - Number(input));
      (async () => {
        setLoadingStatus(true);
        const article = {
          aadarsh: counter,
        };
        await axios.put(
          "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
          article
        );

        setLoadingStatus(false);
      })();
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="Counter">
      {loadingStatus ? <Alert /> : <Alert hidden="hidden" />}
      <div className="Counter__btn-controls">
        <Button
          content="-"
          btnClass="left"
          fill={fillSecondary}
          clickHandler={subtractionClickHandler}
        />
        <Display onChangeHandler={onChangeHandler} />
        <Button
          content="+"
          btnClass="right"
          fill={fillPrimary}
          clickHandler={additionClickHandler}
        />
      </div>
    </div>
  );
}
export default Counter;
