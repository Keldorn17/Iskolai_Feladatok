import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./components/Counter";
import Login from "./components/Login";
import { Todo } from "./components/Todo";
import { useState } from "react";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="container p-5">
      <h1 className="border-bottom border-info text-center">
        My First React App
      </h1>
      {/* <Counter /> */}
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Todo setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
