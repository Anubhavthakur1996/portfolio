import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Tools from "../../assets/tools.png";

const SkillsUI = ({
  skills,
  cursonOnButton,
  goNext,
  goNextPage,
  toAnimate,
  isMobile,
  showMenu,
  playAudio,
}) => {
  return (
    <div className="skills move-bottom-up">
      <img
        src={Tools}
        alt="tools"
        className={
          (isMobile ? "profile-image-mobile" : "profile-image") +
          " scale-in-out"
        }
      />
      <div className="list-wrapper">
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
                onClick={playAudio}
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
