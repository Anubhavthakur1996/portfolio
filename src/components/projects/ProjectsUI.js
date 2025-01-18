import { FcRules } from "react-icons/fc";
import { Button, Timeline } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

const ProjectsUI = ({
  work,
  toAnimate,
  goNextPage,
  cursonOnButton,
  goNext,
  isMobile,
  showMenu,
}) => {
  return (
    <div className="projects move-right-left">
      <span className={isMobile ? "title-mobile" : "title"}>
        <FcRules />
        &nbsp;&nbsp; A Little history lesson &nbsp;&nbsp;
        <FcRules />
      </span>
      <div
        className={
          isMobile ? "timeline-box-container-mobile" : "timeline-box-container"
        }
      >
        <div className="timeline-box">
          <Timeline
            className="timeline-wrapper"
            mode={isMobile ? "left" : "alternate"}
            items={work}
          />
        </div>
      </div>
      {goNext && !showMenu && (
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
