import React, { useState } from "react";
import useTitleCount from "../useTitleCount";
const Test = () => {
  const [count, setCount] = useState(0);
  useTitleCount(count);
  return (
    <>
      <div className="memo">
        <h1>Custom Hook</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};
export default Test;
