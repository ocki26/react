import "./Style.css";
const MyComponent = () => {
  // const hoiDanIt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const hoiDanIt = {
    name: "hoidanit",
    age: 18,
  };
  return (
    <>
      <div>{console.log("banh my")}</div>
      <div>{JSON.stringify(hoiDanIt)}hoi dan truong</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        hoi dan it
      </div>
    </>
  );
};
export default MyComponent;
