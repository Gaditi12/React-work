import React, { useState } from "react";
function ConvertTemp() {
  const [temp, setTemp] = useState({ c: 0, f: 0 });
  //   function toCelsius(fahrenheit) {
  //     return ((fahrenheit - 32) * 5) / 9;
  //   }
  function updateC(e) {
    setTemp({
      c: e.target.value,
      f: ((+e.target.value * 9) / 5 + 32).toFixed(2),
    });
  }
  function updateF(e) {
    setTemp({
      c: (((+e.target.value - 32) * 5) / 9).toFixed(2),
      f: e.target.value,
    });
  }

  return (
    <>
      <div id="temp">
        <h1>Temperature Convertor</h1>
        <fieldset>
          <legend>Enter temperature in celsius:</legend>
          <input type="number" value={temp.c} onChange={updateC} />
        </fieldset>
        <fieldset>
          <legend>Enter temperature in fahrenheit:</legend>
          <input type="number" value={temp.f} onChange={updateF} />
        </fieldset>
      </div>
    </>
  );
}

export default ConvertTemp;
