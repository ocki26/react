const TodoData = (props) => {
  const { name, age, data } = props;
  //hoac nhu kieu nay
  //const name = props.name;
  const { Todolist } = props;
  return (
    console.log("check props ==>", Todolist),
    (
      <div className="to-do-data">
        {Todolist.map((item, index) => {
          console.log("check item >>>>>>", item, index);
          return (
            <div className="todo-item">
              <div>{item.name}</div>
              <button>delete</button>
            </div>
          );
        })}
        <div>learning react</div>
        <div>watching on youtube</div>
        <div>{JSON.stringify(props.Todolist)}</div>
      </div>
    )
  );
};
export default TodoData;
