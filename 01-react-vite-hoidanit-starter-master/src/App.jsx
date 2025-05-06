import MyComponent from "./componets/learn/MyComponent";
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
  return (
    <div className="To_do_container">
      <div className="to-do-tile">to do list</div>
      <TodoNew />
      <TodoData />
      <div className="logo">
        <img src={ReactLogo} alt="" />
      </div>
    </div>
  );
};

export default App;
