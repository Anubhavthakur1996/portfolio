import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import skills from "../../data/skills";
import SkillsUI from "./SkillsUI";
import "./skill_index.scss";

const Skills = () => {
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

  const goNextPage = () => nav("/endorsements");

  const props = {
    toAnimate,
    goNext,
    cursonOnButton,
    goNextPage,
    skills,
  };
  return <SkillsUI {...props} />;
};

export default Skills;
