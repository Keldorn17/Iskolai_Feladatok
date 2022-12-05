import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./components/Counter";
import Home from "./components/Home";
import Login from "./components/Login";
import { Todo } from "./components/Todo";
import { MyNavBar } from "./components/MyNavBar";
import { useState } from "react";
import { Products } from "./components/Products";
import { Product } from "./components/Product";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="container p-5">
      <MyNavBar />
      <div className="holder">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route
            path="login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="todo" 
            element={<Todo setIsLoggedIn={setIsLoggedIn} />} 
          />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </div>
      {/*
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Todo setIsLoggedIn={setIsLoggedIn} />}
      */}
    </div>
  );
}

export default App;
