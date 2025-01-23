import { Carousel, Button, Card, Image, Typography } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { FcCollaboration } from "react-icons/fc";
import Man from "../../assets/man-2.jpg";
import Endorement from "../../assets/endorsement.png";

const { Meta } = Card;
const { Title } = Typography;

const EndorsementsUI = ({
  endoresemnt,
  toAnimate,
  goNext,
  goNextPage,
  cursonOnButton,
  isMobile,
  showMenu,
  logoClick,
}) => {
  return (
    <div className="endorsement move-left-right">
      {!isMobile ? (
        <img
          src={Endorement}
          alt="endorsement"
          onClick={logoClick}
          className={
            (isMobile ? "profile-image-mobile" : "profile-image") +
            " scale-in-out"
          }
        />
      ) : (
        <span className={isMobile ? "title-mobile" : "title"}>
          <Title>
            <FcCollaboration /> &nbsp; What People are Saying? &nbsp;{" "}
            <FcCollaboration />
          </Title>
        </span>
      )}

      <div className={isMobile ? "slider-wrapper-mobile" : "slider-wrapper"}>
        <Carousel autoplay className="slider" arrows>
          {endoresemnt?.map((endorse, index) => {
            if (isMobile) {
              return (
                <Card
                  key={index}
                  hoverable
                  cover={<Image alt="Cover" src={Man} />}
                >
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
                    <Image className="img-class" alt="Cover" src={Man} />
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
