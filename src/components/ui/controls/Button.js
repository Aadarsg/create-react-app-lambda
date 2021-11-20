import "./Button.css";

function Button(props) {
  const { content } = props;
  const btnClass = `Button border-radius-${props.btnClass} ${props.fill}`;
  return (
    <div className={btnClass} onClick={props.clickHandler}>
      <span>{content}</span>
    </div>
  );
}
export default Button;
