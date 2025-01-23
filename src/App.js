import { useEffect, useRef, useState } from "react";
import { Button, Layout } from "antd";
import { PlayCircleOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Source from "./assets/intro_vid.mp4";
import Splash from "./assets/splash.png";
import "./App.scss";

const SplashComp = () => {
  return (
    <div className="splash">
      <div className="spin-infinite">
        <img
          className="splash-img scale-in-out-infinite"
          src={Splash}
          alt="splash"
        />
      </div>
    </div>
  );
};

function App() {
  const { Content } = Layout;
  const vidRef = useRef();
  const [start, setStart] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const [splash, setSplash] = useState(true);
  const [toAnimate, setToAnimate] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    if (start) {
      vidRef.current.play();
    }
  }, [start]);

  useEffect(() => {
    setTimeout(() => setSplash(false), 4000);
  }, [splash]);

  const startAction = () => {
    setStart(true);
  };

  const onVideoEnd = () => {
    setEnableScroll(true);
  };

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const goNextPage = () => nav("/intro");

  if (splash) {
    return <SplashComp />;
  }

  if (start) {
    return (
      <Layout className="App">
        <Content className="body">
          <video className="vid-banner" ref={vidRef} onEnded={onVideoEnd}>
            <source src={Source} type="video/mp4" />
          </video>
          {enableScroll ? (
            <Button
              type="primary"
              size="large"
              className={`down-button ${toAnimate ? "bounce-up-down" : ""}`}
              onMouseEnter={cursonOnButton}
              icon={<ArrowDownOutlined />}
              onClick={goNextPage}
            />
          ) : null}
        </Content>
      </Layout>
    );
  } else {
    return (
      <Layout className="container scale-in-out">
        <Button
          className="start"
          icon={<PlayCircleOutlined />}
          onClick={startAction}
        >
          Start
        </Button>
      </Layout>
    );
  }
}

export default App;
