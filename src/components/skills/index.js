import skills from "../../data/skills";
import SkillsUI from "./SkillsUI";
import "./skill_index.scss";

const props = {
  skills,
};

const Skills = () => <SkillsUI {...props} />;

export default Skills;
