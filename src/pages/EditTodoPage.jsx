import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoContext } from "../contexts/TodoContext";

const EditTodoPage = () => {
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, editTodo } = useTodoContext();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getOneTodo(id);
  }, []);

  useEffect(() => {
    if (oneTodo) {
      setName(oneTodo.name);
      setNumber(oneTodo.number);
      setEmail(oneTodo.email);
    }
  }, [oneTodo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !number.trim() || !email.trim()) {
      return;
    }
    const newData = {
      name,
      number,
      email,
    };
    // addTodo(newTodo);

    editTodo(id, newData);

    navigate("/");
  }
  return (
    <div>
      <h1 className="text-center mt-4">Edit todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Control
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Button
          className="mx-auto d-block mt-2 px-5"
          type="submit"
          variant="dark"
        >
          edit
        </Button>
      </Form>
    </div>
  );
};

export default EditTodoPage;
