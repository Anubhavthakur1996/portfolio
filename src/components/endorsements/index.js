import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./endorse_index.scss";
import EndorsementsUI from "./EndorsementsUI";
import endoresemnt from "../../data/endorsement";

const Endorsements = () => {
  const nav = useNavigate();
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  let delay = useRef();

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
  };
  return <EndorsementsUI {...props} />;
};

export default Endorsements;
