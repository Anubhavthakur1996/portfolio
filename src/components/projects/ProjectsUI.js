import { FcRules } from "react-icons/fc";
import { Button, Timeline } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

const ProjectsUI = ({
  work,
  toAnimate,
  goNextPage,
  cursonOnButton,
  goNext,
}) => {
  return (
    <div className="projects">
      <span className="title shadow-one">
        <FcRules />
        &nbsp;&nbsp; A Little history lesson &nbsp;&nbsp;
        <FcRules />
      </span>
      <div className="timeline-box-container">
        <div className="timeline-box">
          <Timeline
            className="timeline-wrapper"
            mode="alternate"
            items={work}
          />
        </div>
      </div>
      {goNext && (
        <Button
          type="primary"
          size="large"
          className={`down-button ${toAnimate ? "bounce-up-down" : ""}`}
          onMouseEnter={cursonOnButton}
          icon={<ArrowDownOutlined />}
          onClick={goNextPage}
        />
      )}
    </div>
  );
};

export default ProjectsUI;
