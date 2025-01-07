import { useEffect, useRef, useState } from "react";
import { Button, Layout } from "antd";
import { PlayCircleOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Source from "./assets/intro_vid.mp4";
import "./App.scss";
import { useNavigate } from "react-router";

function App() {
  const { Content } = Layout;
  const vidRef = useRef();
  const [start, setStart] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const [toAnimate, setToAnimate] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    if (start) {
      vidRef.current.play();
    }
  }, [start]);

  const startAction = () => {
    setStart(true);
  };

  const onVideoEnd = () => {
    setEnableScroll(true);
  };

  // const handleScoll = (event) => {
  //   debugger;
  //   if (enableScroll) {
  //     debugger;
  //     goNextPage();
  //   }
  // };

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  const goNextPage = () => nav("/intro");

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
      <Layout className="container">
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
