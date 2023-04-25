import React, { useState } from "react";
function SecCounter() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleCount}>{count} times clicked</button>
      <br />
      <button onClick={handleCount}>{count} times clicked</button>
    </>
  );
}
export default SecCounter;
