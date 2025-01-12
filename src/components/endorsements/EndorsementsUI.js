import { Carousel, Button, Card } from "antd";
import { FcCollaboration, FcBusinessman } from "react-icons/fc";
import { ArrowDownOutlined } from "@ant-design/icons";

const { Meta } = Card;

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
      <div className="slider-wrapper">
        <Carousel className="slider" autoplay arrows>
          {endoresemnt?.map((endorse) => {
            return (
              <>
                {/* Card body */}
                <Card bordered={false} className="card">
                  {/* Card Header */}
                  <div className="card-header">
                    {/* Card Icon */}
                    <div className="card-icon">
                      <FcBusinessman />
                    </div>
                    {/* Card Title Column*/}
                    <div className="card-title-column">
                      {/* Card Title */}
                      {/* <div className="card-title">{endorse?.name}</div> */}

                      {/* Card Subtitle */}
                      {/* <div className="card-subtitle">{endorse?.title}</div> */}

                      <Meta
                        title={endorse?.name}
                        description={endorse?.title}
                      />
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="card-content">{endorse?.comment}</div>
                </Card>
              </>
            );
          })}
        </Carousel>
      </div>

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
