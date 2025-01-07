import { FcRules } from "react-icons/fc";
import { Timeline } from "antd";

const ProjectsUI = ({ work, contentStyle, contentArrowStyle, iconStyle }) => {
  debugger;

  return (
    <div className="projects">
      <span className="title shadow-one">
        <FcRules />
        &nbsp;&nbsp; A Little history lesson &nbsp;&nbsp;
        <FcRules />
      </span>
      <div className="timeline-box">
        <Timeline mode="alternate" items={work} />
      </div>
    </div>
  );
};

export default ProjectsUI;
