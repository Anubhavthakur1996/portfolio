import {
  FcApproval,
  FcSupport,
  FcSettings,
  FcUp,
  FcTodoList,
  FcServices,
  FcMultipleInputs,
  FcFullBattery,
} from "react-icons/fc";
import { Button } from "antd";
import Profile from "../../assets/p_l.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const IntroductionUI = ({
  toAnimate,
  goNext,
  cursonOnButton,
  goNextPage,
  isMobile,
}) => {
  return (
    <>
      <div
        className={
          (isMobile ? "introduction-mobile" : "introduction") +
          " move-bottom-up"
        }
      >
        <img
          src={Profile}
          alt="profile"
          className={
            (isMobile ? "profile-image-mobile" : "profile-image") +
            " scale-in-out"
          }
        />
        <div className="introduction-text">
          <div className="row move-left-right">
            Hi there, I am &nbsp;
            <span className="name">
              Anubhav <FcApproval className="scale-in-out" />
            </span>
            .
          </div>
          <div className="row move-right-left">
            I am a &nbsp;
            <span className="profession">
              <FcSupport className="rotate-up-down" /> software engineer{" "}
              <FcSupport className="rotate-up-down" />
            </span>
            .
          </div>
          <div className="row move-left-right">
            I am a &nbsp;
            <span className="great">
              great <FcUp className="scale-in-out" />
              &nbsp;
            </span>{" "}
            <span className="profession">
              software engineer <FcSettings className="circle-rotation" />
            </span>
            .
          </div>
          <div className="row move-right-left">
            I know how to build &nbsp;
            <span className="great">
              great <FcUp className="scale-in-out" />
              &nbsp;
            </span>{" "}
            <span className={isMobile ? "software-mobile" : "software"}>
              software
            </span>
            .
          </div>
          <div className="row move-left-right">
            I know my &nbsp;
            <span className="stack">
              stack <FcTodoList />
            </span>
            .
          </div>
          <div className="row move-right-left">
            It's a fully &nbsp;
            <span className="stacked">
              stacked <FcMultipleInputs /> &nbsp;
            </span>{" "}
            <span className="stack">
              stack <FcTodoList />
            </span>
            .
          </div>
          <div className="row move-left-right">
            Yeah baby, I am a &nbsp;
            <span className="stacked">
              stacked <FcMultipleInputs />, &nbsp;
            </span>{" "}
            <span className="stack">
              <FcFullBattery className="scale-in-out" />
              full-stack
              <FcTodoList />
            </span>
            .
          </div>
          <div className="row move-right-left">
            <span className={isMobile ? "software-mobile" : "software"}>
              engineer <FcServices />
            </span>
            .
          </div>
        </div>
        {goNext && (
          <Button
            type="primary"
            className={`right-button ${toAnimate ? "bounce-left-right" : ""}`}
            icon={<ArrowRightOutlined />}
            onMouseEnter={cursonOnButton}
            onClick={goNextPage}
          />
        )}
      </div>
    </>
  );
};

export default IntroductionUI;
