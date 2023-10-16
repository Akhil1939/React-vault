import React, { useState } from "react";

export const UseState = () => {
 const [first, setfirst] = useState("")
  return (
    <div>
      <hr />
      <h1>Use State</h1>
      <input title="type to change state" type="text" onChange={(e)=>{setfirst(e.target.value)}} />
      <h3>Screen : {first}</h3>
      <hr />
    </div>
  );
};
