import React, { useMemo, useState } from "react";
export default function UseMemo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiplication = useMemo(
    function multiply() {
      return add * 10;
    },
    [add]
  );
  return (
    <>
      <div className="memo">
        <h1>Learning useMemo</h1>
        <p>Multiplication : {multiplication}</p>
        <button onClick={() => setAdd(add + 1)}> Add</button>
        <span className="span">{add}</span>
        <br />
        <br />
        <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
        <span className="span">{minus}</span>
      </div>
    </>
  );
}
