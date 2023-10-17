import React, { useState, useMemo } from "react";
import { initialItems } from "./exampleArray";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const selectedItems = useMemo(()=> items.find((item) => 
    item.isSelected
  )
  ,[items])

  return (
    <div>
      <hr />
      <h1>Use Memo</h1>
      <br />
      <h1>Count : {count}</h1>
      <h1>Selected Item : {selectedItems?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
