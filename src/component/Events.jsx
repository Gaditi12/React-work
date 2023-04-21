import React from "react";
function MyButton() {
  function handleClick() {
    alert("You have clicked me");
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}
export default MyButton;
