import { useNavigate } from "react-router";
import NotFoundUI from "./NotFoundUI";

const NotFound = () => {
  const nav = useNavigate();

  const goToIntro = () => nav("/intro");

  const props = {
    goToIntro,
  };

  return <NotFoundUI {...props} />;
};

export default NotFound;
