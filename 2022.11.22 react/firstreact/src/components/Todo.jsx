import React from "react";
import { data } from "../todo";
import { ListGroup, ListGroupItem, Input, Form } from "reactstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = ({ setIsLoggedIn }) => {
  const [todos, setTodos] = useState(data);
  const [newItem, setNewItem] = useState("");
  const addTodo = () => {
    console.log("új adat: ", newItem);
    const newTodo = { id: uuidv4(), content: newItem, state: 0 };
    setTodos([...todos, newTodo]);
    setNewItem("");
  };
  const deleteTodo = (id) => {
    console.log("törlendő: ",id)
    const newTodos = todos.filter(obj => obj.id != id)
    setTodos(newTodos)
  }
  return (
    <div className="container text-center todo">
      <h3>My Todos</h3>
      <Form className="mb-1 d-flex">
        <Input
          placeholder="add todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <i
          className="fa-solid fa-plus fa-4x btn btn-primary"
          onClick={addTodo}
        ></i>
      </Form>
      <ListGroup>
        {todos.map((obj) => (
          <ListGroupItem key={obj.id} className="d-flex justify-content-between align-items-center">
            <i className={obj.state == 1 ? "fa-solid fa-check fa-2x text-success" : "fa-solid fa-check fa-2x text-secondary"}></i>
            <span className={obj.state == 1 ? "done" : ""}>{obj.content}</span>
            <i className="fa-solid fa-trash text-danger fa-2x" onClick={() => deleteTodo(obj.id)}></i>
            </ListGroupItem>
        ))}
      </ListGroup>
      <br />
      <div className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>
        logout
      </div>
    </div>
  );
};
