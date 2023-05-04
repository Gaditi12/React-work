import React, { useReducer } from "react";

export default function Counter() {
  const initialstate = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <div>
        <div>Count : {state.count}</div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
}
