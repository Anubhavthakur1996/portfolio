import { useDispatch, useSelector } from "react-redux";
import ContacUIt from "./ContactUI";
import { showMenu } from "../../redux/menuSlice";
import "./contact_index.scss";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(showMenu());
  
  const isMobile = useSelector((state) => state.core.isMobile);
  const props = { isMobile };

  return <ContacUIt {...props} />;
};

export default Contact;
