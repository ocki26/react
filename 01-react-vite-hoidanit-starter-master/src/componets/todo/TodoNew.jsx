import React, { useState } from "react";
const TodoNew = (props) => {
  // console.log("check props ==>", props);
  // const ValueInput = "garan";

  const [ValueInput, setValueInput] = useState("");
  const { AddNewToDo } = props;
  // AddNewToDo("hoidanit");
  const Handleclick = () => {
    console.log("check value input", ValueInput);
    AddNewToDo(ValueInput);
  };
  const Handleonchange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="to-do-new">
      <input
        className="input_todo"
        type="text"
        onChange={(event) => Handleonchange(event.target.value)}
        value={ValueInput}
      />
      <button
        className="button_add"
        style={{ cursor: "pointer" }}
        onClick={Handleclick}
      >
        add
      </button>
      <div>My text input is {ValueInput} </div>
    </div>
  );
};
export default TodoNew;
