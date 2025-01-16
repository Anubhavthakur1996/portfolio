import { useDispatch } from "react-redux";
import ContacUIt from "./ContactUI";
import { showMenu } from "../../redux/menuSlice";
import "./contact_index.scss";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(showMenu());
  return <ContacUIt />;
};

export default Contact;
