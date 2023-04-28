import React, { useEffect, useState } from "react";
function Example() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handlesecClick() {
    setNum(num + 1);
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("hello useEffect"); // second priority
    //alert("you clicked me");
  });
  console.log("Hello outside"); // first priority
  return (
    <>
      <div
        style={{
          backgroundColor: "#024949",
          height: "30vh",
          textAlign: "center",
        }}
      >
        <h1>Using useEffect hook</h1>
        {/* <p>You clicked {count} times</p> */}
        <button onClick={handleClick}>Clicked me {count} times</button>
        <br />
        <button onClick={handlesecClick}>Clicked me {num} times</button>
      </div>
    </>
  );
}
export default Example;
