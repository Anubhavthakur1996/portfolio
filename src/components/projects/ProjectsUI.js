import { FcRules } from "react-icons/fc";
import { Button, Timeline, Typography } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

const { Title } = Typography;

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
        <Title>
          <FcRules />
          &nbsp;&nbsp; A Little History Lesson &nbsp;&nbsp;
          <FcRules />
        </Title>
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
