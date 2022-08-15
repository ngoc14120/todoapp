import React from "react";

function TodoItems(props) {
  const { completed, id, title } = props.todo;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <span className={completed ? "completed" : null}>{title}</span>
      <button className="btn-style" onClick={() => props.deleteTodoItems(id)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
}

export default TodoItems;
