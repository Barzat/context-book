import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

export const todoContext = createContext();
export function useTodoContext() {
  return useContext(todoContext);
}

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [oneTodo, setOneTodo] = useState(null);

  async function getTodos() {
    const { data } = await axios.get(API);
    setTodos(data);
  }
  async function addTodo(newTodo) {
    await axios.post(API, newTodo);
    getTodos();
  }
  async function deleteTodo(id) {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }
  async function getOneTodo(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneTodo(data);
  }
  async function editTodo(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
    getTodos();
  }
  const value = {
    todos,
    getTodos,
    addTodo,
    deleteTodo,
    getOneTodo,
    oneTodo,
    editTodo,
  };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContext;
