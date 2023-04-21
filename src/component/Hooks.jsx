import React, { useState } from "react";

function Hooks() {
  const [headingText, setText] = useState("");
  const [isMouseOver, setColor] = useState(false);
  const [input, setInput] = useState("Welcome");
  function handleClick() {
    setInput("");
    setText("submitted");

    document.getElementById("input").value = "";
  }
  function handleMouseOver() {
    setColor(true);
  }
  function handleMouseOut() {
    setColor(false);
  }
  function handleChange(e) {
    const abc = e.target.value;
    setInput("Hello, " + abc);
  }
  function handleReset() {
    setInput("Welcome");
    setText("");
  }
  return (
    <>
      <div className="hook">
        <h1>{input}</h1>
        <h2>{headingText}</h2>

        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          id="input"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "#c666ec" : "white" }}
          type="submit"
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </div>
    </>
  );
}
export default Hooks;
