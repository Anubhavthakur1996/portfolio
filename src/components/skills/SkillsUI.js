import { FcSupport } from "react-icons/fc";

const SkillsUI = ({ skills }) => {
  return (
    <div className="skills">
      <span className="title shadow-one">
        <FcSupport /> &nbsp;&nbsp; My Tools of Trade &nbsp;&nbsp;
        <FcSupport />
      </span>
      <div className="skill-list">
        {skills?.map((ele, ind) => {
          if (ind !== 0 && (ind + 1) % 2 === 0) {
            return (
              <>
                <div key={ind} className="skill-row shadow-one">
                  <div className="skill-name">{ele?.title}</div>{" "}
                  <div className="skill-icon">{ele?.icon}</div>
                </div>
                <div className="row-break"></div>
              </>
            );
          } else {
            return (
              <div key={ind} className="skill-row shadow-one">
                <div className="skill-name">{ele?.title}</div>{" "}
                <div className="skill-icon">{ele?.icon}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SkillsUI;
