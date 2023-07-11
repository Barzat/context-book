import React, { useContext } from "react";
import { todoContext } from "../contexts/TodoContext";
import TodoList from "../components/TodoList";
const HomePage = () => {
  const { todos, addTodo } = useContext(todoContext);
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default HomePage;
