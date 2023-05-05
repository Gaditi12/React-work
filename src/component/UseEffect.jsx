import React, { useEffect, useState } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };
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
  }, [count]);
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });
  console.log("Hello outside"); // first priority
  return (
    <>
      <div className="hook">
        <h1>Using useEffect hook</h1>
        {/* <p>You clicked {count} times</p> */}
        <button onClick={handleClick}>Clicked me {count} times</button>
        <br />
        <br />
        <button onClick={handlesecClick}>Clicked me {num} times</button>
      </div>
      <br />
      <div className="hook">
        <p>The actual size of the window is :</p>
        <h3>{widthCount}</h3>
      </div>
    </>
  );
}
export default UseEffect;
