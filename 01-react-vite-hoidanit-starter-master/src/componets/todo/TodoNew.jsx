const TodoNew = (props) => {
  console.log("check props ==>", props);
  const { AddNewToDo } = props;
  AddNewToDo("hoidanit");
  return (
    <div className="to-do-new">
      <input className="input_todo" type="text" />
      <button className="button_add">add</button>
    </div>
  );
};
export default TodoNew;
