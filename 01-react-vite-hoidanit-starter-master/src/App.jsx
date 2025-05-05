import MyComponent from "./componets/learn/MyComponent";
import {
  SecondComponent,
  ThirdComponent,
} from "./componets/learn/SecondComponent";
import "./componets/todo/todo.css";
const App = () => {
  return (
    <div className="To_do_container">
      <div className="to-do-tile">to do list</div>
      <div>
        <input className="input_todo" type="text" />
        <button className="button_add">add</button>
      </div>
      <div className="to-do-list">
        <div>learning react</div>
        <div>watching on youtube</div>
      </div>
    </div>
  );
};

export default App;
