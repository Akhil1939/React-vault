import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`);
  }, [count2]);

  return (
    <div>
        <hr/>
      <h1>Use Effect</h1>
      <div>
        <p>check console</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount2(count2 + 1)}>Click me</button>
      </div>
      <hr/>
    </div>
  );
};
