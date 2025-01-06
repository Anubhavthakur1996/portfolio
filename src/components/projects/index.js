import work from "../../data/work";
import ProjectsUI from "./ProjectsUI";
import "./proj_index.scss";

const contentStyle = {
  background: "rgb(189, 137, 248)",
  color: "#fff",
};

const contentArrowStyle = {
  borderRight: ".5rem solid  rgb(189, 137, 248)",
};

const iconStyle = { background: "rgb(255, 255, 255)", color: "#fff" };

const props = {
  work,
  contentArrowStyle,
  contentStyle,
  iconStyle,
};

const Projects = () => <ProjectsUI {...props} />;

export default Projects;
