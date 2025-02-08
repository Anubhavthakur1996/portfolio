import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";
import { FcSupport, FcNook } from "react-icons/fc";

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
  {
    name: "My Blogs",
    path: "https://anubhavthakur1996.github.io/Thakur-Blogs-Tutorials/",
    icon: <FcNook />,
    isUrl: true,
  },
];

export default menu;
