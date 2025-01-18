import { useEffect, useRef, useState } from "react";
import { Button, Layout } from "antd";
import { PlayCircleOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Source from "./assets/intro_vid.mp4";
import { setMobile } from "./redux/coreSlice";
import "./App.scss";

function App() {
  const { Content } = Layout;
  const vidRef = useRef();
  const [start, setStart] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const [toAnimate, setToAnimate] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch();

  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;

  /* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
  let regexp = /android|iphone|kindle|ipad|iPod/i;

  /* Using test() method to search regexp in details 
it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    dispatch(setMobile(true));
  } else {
    dispatch(setMobile(false));
  }

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
