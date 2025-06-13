import React from "react";
import { useState } from "react";

const Calculate = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count > 0 ?  count - 1 : count);
  };
  const reset = () =>{
    setCount(0);
  }
  return (
    <div>
      <h3>Calculate</h3>
      <p>Count Value : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Calculate;
