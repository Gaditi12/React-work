import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button type="button" onClick={handleCount}>
        {count} times Clicked
      </button>

      {/*sharing data between components */}

      {/* <button type="button" onClick={handleCount}>
          {count} times Clicked
        </button> */}
    </>
  );
}
export default Counter;
