import { FcCheckmark, FcRules, FcLink, FcRightUp } from "react-icons/fc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProjectsUI = ({ work, contentStyle, contentArrowStyle, iconStyle }) => {
  return (
    <div className="projects">
      <span className="title shadow-one">
        <FcRules />
        &nbsp;&nbsp; A Little history lesson &nbsp;&nbsp;
        <FcRules />
      </span>
      <div className="timeline-box">
        <VerticalTimeline>
          {work?.map((ele, index) => {
            return (
              <VerticalTimelineElement
                position={index % 2 === 0 ? "right" : "left"}
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date={ele?.year}
                iconStyle={iconStyle}
                icon={<FcCheckmark />}
              >
                <h3 className="vertical-timeline-element-title">
                  {ele?.title}
                </h3>

                {ele?.link ? (
                  <h5 className="vertical-timeline-element-subtitle">
                    <br />
                    <FcLink />
                    &nbsp;&nbsp;
                    <a
                      href={ele.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ele?.title} Link
                    </a>
                    &nbsp;&nbsp;
                    <FcRightUp />
                    &nbsp;&nbsp;
                    <FcLink />
                  </h5>
                ) : null}

                <p>{ele?.description}</p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Infinity - Beyond"
            iconStyle={iconStyle}
            icon={<FcCheckmark />}
          >
            <h3 className="vertical-timeline-element-title">Want more ??</h3>

            <h5 className="vertical-timeline-element-subtitle">
              <br />
              <FcLink />
              &nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/anubhavthakur1996/details/projects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More Link
              </a>
              &nbsp;&nbsp;
              <FcRightUp />
              &nbsp;&nbsp;
              <FcLink />
            </h5>

            <p>For more, you can always check my Linkedin.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default ProjectsUI;
