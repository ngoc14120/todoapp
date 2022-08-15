import React from "react";
import TodoItems from "./TodoItems";

function Todos(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            handleChange={props.handleChange}
            deleteTodoItems={props.deleteTodoItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
