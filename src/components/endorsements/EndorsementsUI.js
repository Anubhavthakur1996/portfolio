import { Carousel, Button, Card } from "antd";
import { FcCollaboration, FcBusinessman } from "react-icons/fc";
import { ArrowDownOutlined } from "@ant-design/icons";
import Man from "../../assets/man-2.jpg";

const { Meta } = Card;

const EndorsementsUI = ({
  endoresemnt,
  toAnimate,
  goNext,
  goNextPage,
  cursonOnButton,
  isMobile,
  showMenu,
}) => {
  return (
    <div className="endorsement move-left-right">
      <span className={isMobile ? "title-mobile" : "title"}>
        <FcCollaboration /> &nbsp; What the people are saying? &nbsp;{" "}
        <FcCollaboration />
      </span>
      <div className={isMobile ? "slider-wrapper-mobile" : "slider-wrapper"}>
        <Carousel className="slider" arrows>
          {endoresemnt?.map((endorse, index) => {
            if (isMobile) {
              return (
                <Card hoverable cover={<img alt="Cover" src={Man} />}>
                  <Meta title={endorse?.name} description={endorse?.title} />
                  {/* Card Content */}
                  <div className="card-content">{endorse?.comment}</div>
                </Card>
              );
            }
            return (
              <>
                {/* Card body */}
                <Card hoverable key={index} bordered={false} className="card">
                  {/* Card Icon */}
                  <div className="card-icon">
                    <img alt="Cover" src={Man} />
                  </div>
                  {/* Card Header */}
                  <div className="card-right">
                    {/* Card Title Column*/}
                    <div className="card-title-column">
                      {/* Card Title */}
                      <Meta
                        title={endorse?.name}
                        description={endorse?.title}
                      />
                      {/* Card Content */}
                      <div className="card-content">{endorse?.comment}</div>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </Carousel>
      </div>

      {goNext && !showMenu && (
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
