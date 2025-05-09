const TodoData = (props) => {
  const { name, age, data } = props;
  //hoac nhu kieu nay
  //const name = props.name;
  return (
    // console.log("check props ==>", props),
    <div className="to-do-data">
      <div>my name is {name}</div>
      <div>learning react</div>
      <div>watching on youtube</div>
    </div>
  );
};
export default TodoData;
