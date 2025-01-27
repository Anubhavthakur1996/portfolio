import { VscAzureDevops } from "react-icons/vsc";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import Python from "../assets/python.svg";

const skills = [
  {
    id: 1,
    title: "Java Script",
    icon: <SiJavascript style={{ color: "#fcb900" }} />,
  },
  {
    id: 2,
    title: "React JS",
    icon: <FaReact style={{ color: "rgba(59,130,246,.5)" }} />,
  },
  {
    id: 3,
    title: "React Native",
    icon: <TbBrandReactNative style={{ color: "rgba(59,130,246,.5)" }} />,
  },
  {
    id: 4,
    title: "Type Script",
    icon: <SiTypescript style={{ color: "#3178c6" }} />,
  },
  {
    id: 5,
    title: "Vue JS",
    icon: <FaVuejs style={{ color: "#155f3e" }} />,
  },
  {
    id: 6,
    title: "Python",
    icon: <img src={Python} alt="python" />,
  },
  {
    id: 7,
    title: "Dev Ops",
    icon: <VscAzureDevops style={{ color: "#f54739" }} />,
  },
  {
    id: 8,
    title: "Git",
    icon: <FaGitAlt style={{ color: "#f54739" }} />,
  },
];

export default skills;
