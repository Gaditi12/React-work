import React, { useCallback, useState } from "react";
import Todos from "./Todos";
function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const addTodos = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);
  // const addTodos = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };
  return (
    <>
      <div className="todos">
        <Todos todos={todos} addTodo={addTodos} />
        <hr />
        <div>
          Count : {count}
          <button className="todo-btn" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
export default UseCallback;
