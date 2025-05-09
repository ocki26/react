const TodoNew = (props) => {
  // console.log("check props ==>", props);
  const { AddNewToDo } = props;
  AddNewToDo("hoidanit");
  const Handleclick = () => {
    alert("ban da click");
  };
  const Handleonchange = (name) => {
    console.log("Handleonchange", name);
  };
  return (
    <div className="to-do-new">
      <input
        className="input_todo"
        type="text"
        onChange={(event) => Handleonchange(event.target.value)}
      />
      <button
        className="button_add"
        style={{ cursor: "pointer" }}
        onClick={Handleclick}
      >
        add
      </button>
    </div>
  );
};
export default TodoNew;
