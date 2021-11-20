import "./Display.css";

function Display(props) {
  console.log();
  return (
    <form className="Display">
      <input
        type="text"
        placeholder="-"
        onChange={props.onChangeHandler}
      ></input>
    </form>
  );
}
export default Display;
