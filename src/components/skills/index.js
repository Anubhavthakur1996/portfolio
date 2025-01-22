import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import skills from "../../data/skills";
import SkillsUI from "./SkillsUI";
import audioClip from "../../assets/audio/piano.mp3";
import "./skill_index.scss";

const Skills = () => {
  const nav = useNavigate();
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  let delay = useRef();
  const audio = new Audio(audioClip);

  const showMenu = useSelector((state) => state.menu.menu);
  const isMobile = useSelector((state) => state.core.isMobile);

  useEffect(() => {
    delay.current = setTimeout(() => {
      setGoNext(true);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const playAudio = () => {
    audio.play();
  };

  const goNextPage = () => nav("/endorsements");

  const props = {
    toAnimate,
    goNext,
    cursonOnButton,
    goNextPage,
    skills,
    isMobile,
    showMenu,
    playAudio,
  };
  return <SkillsUI {...props} />;
};

export default Skills;
