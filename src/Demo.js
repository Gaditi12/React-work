import React, { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const updateMyCount = (num) => {
    setCount(num);
  };

  return <ChildA count={count} updateit={updateMyCount} />;
}

function ChildA(props) {
  const updateMyCount = () => {
    console.log(props.updateit(props.count + 1));
  };
  return (
    <>
      <h2>This is child {props.count}</h2>
      <button onClick={updateMyCount}>Click me to update</button>
    </>
  );
}
