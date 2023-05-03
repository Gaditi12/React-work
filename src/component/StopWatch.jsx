import React, { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const refInterval = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(refInterval.current);
    refInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(refInterval.current);
  }
  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <div className="stopWatch">
        <h2>Time passed :{secondPassed.toFixed(3)} </h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
}
