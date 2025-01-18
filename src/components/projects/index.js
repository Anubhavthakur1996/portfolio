import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import work from "../../data/work";
import ProjectsUI from "./ProjectsUI";
import "./proj_index.scss";

const Projects = () => {
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  const nav = useNavigate();
  let delay = useRef();
  const isMobile = useSelector((state) => state.core.isMobile);

  useEffect(() => {
    delay.current = setTimeout(() => {
      setGoNext(true);
    }, 10000);

    return () => clearTimeout(delay);
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, true);
  // }, []);

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  // const handleScroll = (e) => {
  //   const bottom =
  //     e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom) {
  //     setGoNext(true);
  //   }
  // };

  const goNextPage = () => nav("/skills");

  const props = {
    work,
    toAnimate,
    cursonOnButton,
    goNextPage,
    goNext,
    isMobile,
  };

  return <ProjectsUI {...props} />;
};

export default Projects;
