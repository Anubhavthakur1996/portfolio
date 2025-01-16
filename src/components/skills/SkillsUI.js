import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FcSupport } from "react-icons/fc";

const SkillsUI = ({
  skills,
  cursonOnButton,
  goNext,
  goNextPage,
  toAnimate,
}) => {
  return (
    <div className="skills move-bottom-up">
      <span className="title">
        <FcSupport /> &nbsp;&nbsp; My Tools of Trade &nbsp;&nbsp;
        <FcSupport />
      </span>
      <div className="skill-list">
        {skills?.map((ele, ind) => {
          return (
            <div key={ind} className="skill-card shadow-one">
              <div className="skill-name">{ele?.title}</div>{" "}
              <div className="skill-icon">{ele?.icon}</div>
            </div>
          );
        })}
      </div>
      {goNext && (
        <Button
          type="primary"
          className={`left-button ${toAnimate ? "bounce-right-left" : ""}`}
          icon={<ArrowLeftOutlined />}
          onMouseEnter={cursonOnButton}
          onClick={goNextPage}
        />
      )}
    </div>
  );
};

export default SkillsUI;
