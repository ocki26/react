import MyComponent from "./componets/learn/MyComponent";
import { useState } from "react";
import {
  SecondComponent,
  ThirdComponent,
} from "./componets/learn/SecondComponent";
import "./componets/todo/todo.css";
import TodoData from "./componets/todo/TodoData";
import TodoNew from "./componets/todo/TodoNew";
import ReactLogo from "./assets/react.svg";

``;
const App = () => {
  const [Todolist, setTodolist] = useState([
    { id: 1, name: "hoidanit" },
    { id: 2, name: "garan" },
  ]);

  const hoiDanIt = "garan";
  const age = 18;
  const data = {
    address: "ha noi",
    country: "vietnam",
  };
  const AddNewToDo = (name) => {
    const newtodo = {
      id: randomIntFromInterval(1, 1000000000000000000),
      name: name,
    };
    setTodolist([...Todolist, newtodo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="To_do_container">
      <div className="to-do-tile">to do list</div>
      <TodoNew AddNewToDo={AddNewToDo} />
      <TodoData name={AddNewToDo} age={age} data={data} Todolist={Todolist} />
      <div className="logo">
        <img src={ReactLogo} alt="" />
      </div>
    </div>
  );
};

export default App;
