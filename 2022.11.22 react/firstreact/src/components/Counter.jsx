import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(5);
  return (
    <div className="d-flex flex-wrap justify-content-center p-3 border align-items-center">
      <h3 className="w-100 text-center">Counter</h3>
      <button
        className="btn btn-danger m-1"
        onClick={() => setCounter(counter - 1)}
        disabled={counter == 0 ? "true" : ""}
      >
        -
      </button>
      <div>
        A számláló értéke: <h5 className="text-center">{counter}</h5>
      </div>
      <button
        className="btn btn-success m-1"
        onClick={() => setCounter(counter + 1)}
        disabled={counter == 10 ? "true" : ""}
      >
        +
      </button>
    </div>
  );
};
