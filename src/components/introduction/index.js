import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import IntroductionUI from "./IntroductionUI";
import "./introduction_index.scss";

const Introduction = () => {
  const nav = useNavigate();
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  let delay = useRef();
  const isMobile = useSelector((state) => state.core.isMobile);

  useEffect(() => {
    delay.current = setTimeout(() => {
      setGoNext(true);
    }, 10000);

    return () => clearTimeout(delay);
  }, []);

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const goNextPage = () => nav("/history");

  const props = {
    toAnimate,
    goNext,
    cursonOnButton,
    goNextPage,
    isMobile,
  };

  return <IntroductionUI {...props} />;
};

export default Introduction;