import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { logoClick } from "../../utils/logo";
import EndorsementsUI from "./EndorsementsUI";
import endoresemnt from "../../data/endorsement";
import "./endorse_index.scss";

const Endorsements = () => {
  const nav = useNavigate();
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  let delay = useRef();

  const isMobile = useSelector((state) => state.core.isMobile);
  const showMenu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    delay.current = setTimeout(() => {
      setGoNext(true);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const goNextPage = () => nav("/contact");

  const props = {
    endoresemnt,
    toAnimate,
    goNext,
    cursonOnButton,
    goNextPage,
    isMobile,
    showMenu,
    logoClick,
  };
  return <EndorsementsUI {...props} />;
};

export default Endorsements;
