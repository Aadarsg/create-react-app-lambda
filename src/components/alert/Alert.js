import Loader from "../ui/Loader";
import "./Alert.css";

function Alert(props) {
  return (
    <div className={`Alert ${props.hidden}`}>
      <Loader />
      <p>Saving counter value</p>
    </div>
  );
}
export default Alert;
