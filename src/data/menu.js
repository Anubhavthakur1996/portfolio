import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";
import { FcSupport } from "react-icons/fc";

const menu = [
  {
    name: "Intro",
    path: "intro",
    icon: <UserOutlined />,
  },
  {
    name: "History",
    path: "history",
    icon: <ContainerOutlined />,
  },
  {
    name: "Skills",
    path: "skills",
    icon: <FcSupport />,
  },
  {
    name: "Endorsements",
    path: "endorsements",
    icon: <HiMiniChatBubbleLeftRight />,
  },
  {
    name: "Contact",
    path: "contact",
    icon: <MdContactMail />,
  },
];

export default menu;
