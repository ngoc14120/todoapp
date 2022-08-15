import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "../store/containers/Footer";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

function TodoApp() {
  const [state, setState] = useState({ todos: [] });
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todos) => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      }),
    });
  };
  const deleteTodoItems = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setState({
          todos: [...state.todos.filter((todos) => todos.id !== id)],
        });
      });
  };
  const addTodo = (title) => {
    const newtitle = {
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newtitle)
      .then((response) => {
        setState({ todos: [...state.todos, response.data] });
      });
  };
  useEffect(() => {
    const config = {
      params: {
        _limit: 10,
      },
    };
    //tạo GET request để lấy danh sách todos
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => setState({ todos: response.data }));
  }, []);

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={state.todos}
        handleChange={handleCheckboxChange}
        deleteTodoItems={deleteTodoItems}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
