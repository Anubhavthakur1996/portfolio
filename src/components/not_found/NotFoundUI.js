import { Result, Button } from "antd";
import "./NotFound.scss";

const NotFoundUI = ({ goToIntro }) => (
  <div className="not-found">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={goToIntro} type="primary">
          Introduction
        </Button>
      }
    />
  </div>
);

export default NotFoundUI;
