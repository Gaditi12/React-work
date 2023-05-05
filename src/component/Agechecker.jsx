import React, { useReducer } from "react";

export default function AgeChecker() {
  const initialState = { age: 1, result: "child" };
  function reducer(state, action) {
    console.log(action.payload);
    switch (action.type) {
      case "Increment":
        state.age = state.age + action.payload.age;

        if (state.age < 18) {
          return {
            age: state.age,
            result: "child",
          };
        } else {
          return {
            age: state.age,
            result: "Adult",
          };
        }

      case "Decrement":
        state.age = state.age - action.payload.age;
        if (state.age < 1) {
          return {
            age: 0,
            result: "valid age",
          };
        } else if (state.age >= 18) {
          return {
            age: state.age,
            result: "Adult",
          };
        } else {
          return {
            age: state.age,
            result: "Child",
          };
        }

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="stopwatch">
        <div>Your age : {state.age}</div>
        <div>Result : {state.result}</div>
        <button
          onClick={() => dispatch({ type: "Increment", payload: { age: 1 } })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "Decrement", payload: { age: 1 } })}
        >
          -
        </button>
      </div>
    </>
  );
}
