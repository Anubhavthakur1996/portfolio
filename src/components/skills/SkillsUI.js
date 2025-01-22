import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { FcSupport } from "react-icons/fc";

const { Title } = Typography;

const SkillsUI = ({
  skills,
  cursonOnButton,
  goNext,
  goNextPage,
  toAnimate,
  isMobile,
  showMenu,
}) => {
  return (
    <div className="skills move-bottom-up">
      <span className={isMobile ? "title-mobile" : "title"}>
        <Title>
          <FcSupport /> &nbsp;&nbsp; My Tools of Trade &nbsp;&nbsp;
          <FcSupport />
        </Title>
      </span>
      <div className="skill-list">
        {skills?.map((ele, ind) => {
          return (
            <div
              key={ind}
              className={
                (isMobile ? "skill-card-mobile" : "skill-card") +
                " shadow-one" +
                (ind % 2 === 0 ? " move-right-left" : " move-left-right")
              }
            >
              <div className="skill-name">{ele?.title}</div>{" "}
              <div
                className={
                  ele?.title.toLowerCase().includes("react") ||
                  ele?.title.toLowerCase().includes("python")
                    ? " circle-rotation skill-icon"
                    : "skill-icon scale-in-out-infinite"
                }
              >
                {ele?.icon}
              </div>
            </div>
          );
        })}
      </div>
      {goNext && !showMenu && (
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
