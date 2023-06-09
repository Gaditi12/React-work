import React, { memo } from "react";
const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      <button className="todo-btn" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};
export default memo(Todos);
