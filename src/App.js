import { useEffect, useRef, useState } from "react";
import { Button, Layout } from "antd";
import { PlayCircleOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Introduction from "./components/introduction";
import Source from "./assets/intro_vid.mp4";
import "./App.scss";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Endorsements from "./components/endorsements";
import Contact from "./components/contact";

function App() {
  const { Content } = Layout;
  const vidRef = useRef();
  const [start, setStart] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const [toAnimate, setToAnimate] = useState(true);

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

  const handleScoll = (event) => {
    if (enableScroll) {
    }
  };

  const cursonOnButton = () => {
    setToAnimate(false);
  };

  // if (start) {
  //   return (
  //     <Layout className="App" onScroll={handleScoll}>
  //       <Content className="body">
  //         <video className="vid-banner" ref={vidRef} onEnded={onVideoEnd}>
  //           <source src={Source} type="video/mp4" />
  //         </video>
  //         {enableScroll ? (
  //           <Button
  //             type="primary"
  //             size="large"
  //             className={`down-button ${toAnimate ? "bounce-7" : ""}`}
  //             onMouseEnter={cursonOnButton}
  //             icon={<ArrowDownOutlined />}
  //           />
  //         ) : null}
  //       </Content>
  //     </Layout>
  //   );

  // } else {
  //   return (
  //     <Layout className="container">
  //       <Button
  //         className="start"
  //         icon={<PlayCircleOutlined />}
  //         onClick={startAction}
  //       >
  //         Start
  //       </Button>
  //     </Layout>
  //   );
  // }

  return <Contact />;
}

export default App;
