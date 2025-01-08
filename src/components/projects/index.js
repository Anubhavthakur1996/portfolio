import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import work from "../../data/work";
import ProjectsUI from "./ProjectsUI";
import "./proj_index.scss";

// const contentStyle = {
//   background: "rgb(189, 137, 248)",
//   color: "#fff",
// };

const Projects = () => {
  const [toAnimate, setToAnimate] = useState(true);
  const [goNext, setGoNext] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setGoNext(true);
    }
  };

  const goNextPage = () => nav("/skills");

  const props = {
    work,
    toAnimate,
    cursonOnButton,
    goNextPage,
    goNext,
  };

  return <ProjectsUI {...props} />;
};

export default Projects;
