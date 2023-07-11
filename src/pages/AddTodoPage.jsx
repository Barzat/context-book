import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

const AddTodoPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const { addTodo } = useTodoContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !number.trim() || !email.trim()) {
      return;
    }
    const newTodo = {
      name,
      number,
      email,
      completed: false,
    };
    addTodo(newTodo);
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-5">Add New Contact</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Name"
        />
        <Form.Control
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          type="number"
          placeholder="Enter Number"
        />
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email"
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="dark"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddTodoPage;
