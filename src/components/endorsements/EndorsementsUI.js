import { Carousel, Button } from "antd";
import { FcCollaboration } from "react-icons/fc";
import { ArrowDownOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.svg";

const EndorsementsUI = ({
  endoresemnt,
  toAnimate,
  goNext,
  goNextPage,
  cursonOnButton,
}) => {
  return (
    <div className="endorsement">
      <span className="title">
        <FcCollaboration /> &nbsp; What the people are saying? &nbsp;{" "}
        <FcCollaboration />
      </span>
      <Carousel className="slider" autoplay arrows>
        {endoresemnt?.map((endorse) => {
          return (
            <>
              {/* Card body */}
              <div className="card">
                {/* Card Header */}
                <div className="card-header">
                  {/* Card Icon */}
                  <div className="card-icon">
                    <img src={Logo} alt="User" />
                  </div>
                  {/* Card Title Column*/}
                  <div className="card-title-column">
                    {/* Card Title */}
                    <div className="card-title">{endorse?.name}</div>

                    {/* Card Subtitle */}
                    <div className="card-subtitle">{endorse?.title}</div>
                  </div>
                </div>
                {/* Card Content */}
                <div className="card-content">{endorse?.comment}</div>
              </div>
            </>
          );
        })}
      </Carousel>
      {goNext && (
        <Button
          type="primary"
          className={`down-button ${toAnimate ? "bounce-up-down" : ""}`}
          icon={<ArrowDownOutlined />}
          onMouseEnter={cursonOnButton}
          onClick={goNextPage}
        />
      )}
    </div>
  );
};

export default EndorsementsUI;
