import React from "react";
function Tick() {
  let d = new Date().toLocaleTimeString();

  return (
    <>
      <p>It is {d}</p>
    </>
  );
}
setInterval(Tick, 1000);
export default Tick;
