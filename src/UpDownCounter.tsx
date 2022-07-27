import { useState } from "react";
import "./UpDownCounter.css";

function UpDownCounter() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount((prev) => prev + 1);
  }

  function countDown() {
    setCount((prev) => prev - 1);
  }

  return (
    <section className="up-down-counter">
      <h1>Exercise 3</h1>
      <div className="count-container">
        <button onClick={countUp} className="up">
          Up
        </button>
        <div className="count-display">{count}</div>
        <button onClick={countDown} className="down">
          Down
        </button>
      </div>
    </section>
  );
}

export default UpDownCounter;
