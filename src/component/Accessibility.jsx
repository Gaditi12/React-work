import React from "react";
function Accessibility() {
  function clickFunc() {
    // alert("button is clicked");
    document.getElementById("mdn").focus();
  }
  return (
    <>
      <label htmlFor="nameInput">Enter your name : </label>
      <input
        id="nameInput"
        type="text"
        placeholder="Enter your name..."
        aria-label="name"
        aria-required="true"
      />
      <table>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
          <td>Column 3</td>
        </tr>
      </table>
      <br />
      <br />
      <a id="mdn" href="https://developer.mozilla.org">
        Visit mdn
      </a>
      <button onClick={clickFunc}>Click Me</button>
    </>
  );
}
export default Accessibility;
