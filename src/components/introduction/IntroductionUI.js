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

const IntroductionUI = ({ toAnimate, goNext, cursonOnButton, goNextPage }) => {
  return (
    <>
      <div className="introduction">
        <img src={Profile} alt="profile" className="profile-image" />
        <div className="introduction-text">
          <p className="row">
            Hi there, I am &nbsp;
            <span className="name">
              Anubhav <FcApproval />
            </span>
            .
          </p>
          <p className="row">
            I am a &nbsp;
            <span className="profession">
              <FcSupport /> software engineer <FcSupport />
            </span>
            .
          </p>
          <p className="row">
            I am a &nbsp;
            <span className="great">
              great <FcUp />
              &nbsp;
            </span>{" "}
            <span className="profession">
              software engineer <FcSettings />
            </span>
            .
          </p>
          <p className="row">
            I know how to build &nbsp;
            <span className="great">
              great <FcUp />
              &nbsp;
            </span>{" "}
            <span className="software">software</span>.
          </p>
          <p className="row">
            I know my &nbsp;
            <span className="stack">
              stack <FcTodoList />
            </span>
            .
          </p>
          <p className="row">
            It's a fully &nbsp;
            <span className="stacked">
              stacked <FcMultipleInputs /> &nbsp;
            </span>{" "}
            <span className="stack">
              stack <FcTodoList />
            </span>
            .
          </p>
          <p className="row">
            Yeah baby, I am a &nbsp;
            <span className="stacked">
              stacked <FcMultipleInputs />, &nbsp;
            </span>{" "}
            <span className="stack">
              <FcFullBattery />
              full-stack
              <FcTodoList />
            </span>
            .
          </p>
          <p className="row">
            <span className="software">
              engineer <FcServices />
            </span>
            .
          </p>
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
