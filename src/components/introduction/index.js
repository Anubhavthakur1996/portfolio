import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./introduction_index.scss";
import IntroductionUI from "./IntroductionUI";

const Introduction = () => {
  const nav = useNavigate();
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  let delay = useRef();

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
  };

  return <IntroductionUI {...props} />;
};

export default Introduction;
