import { useEffect } from "react";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SmileOutlined } from "@ant-design/icons";
import { showMenu } from "../../redux/menuSlice";
import { logoClick } from "../../utils/logo";
import ContacUIt from "./ContactUI";
import clapping from "../../assets/audio/clapping.mp3";
import "./contact_index.scss";

const Contact = () => {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const audioClip = new Audio(clapping);

  const openNotification = () => {
    api.open({
      message: "Awesome!!",
      description: "You got to the end.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const isMobile = useSelector((state) => state.core.isMobile);
  const menu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    if (!menu) {
      openNotification();
      audioClip.play();
      sessionStorage.setItem("menu", "true");
      dispatch(showMenu());
    }
  }, []);

  const props = { isMobile, logoClick };

  return (
    <>
      {contextHolder}
      <ContacUIt {...props} />
    </>
  );
};

export default Contact;
