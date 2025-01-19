import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "../../redux/menuSlice";
import ContacUIt from "./ContactUI";
import "./contact_index.scss";

const Contact = () => {
  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.core.isMobile);
  const menu = useSelector((state) => state.menu.menu);

  const props = { isMobile };

  if (!menu) {
    dispatch(showMenu());
  }

  return <ContacUIt {...props} />;
};

export default Contact;
