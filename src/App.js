import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [isPaused, setPaused] = useState(false);

  const onStart = () => {
    let intervalId = setInterval(
      () => setCounter((tempCounter) => tempCounter + 1),
      1000
    );
    console.log(intervalId);
    setIntervalId(intervalId);
    setPaused(true);
  };

  const onPause = () => {
    clearInterval(intervalId);
    setPaused(false);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className={"buttonDiv"}>
        {!isPaused ? (
          <button className={"button"} onClick={() => onStart()}>
            {"Start"}
          </button>
        ) : (
          <button className={"button"} onClick={() => onPause()}>
            {"Pause"}
          </button>
        )}
        <button className={"button"} onClick={() => setCounter(0)}>
          {"Reset"}
        </button>
      </div>
    </div>
  );
}
