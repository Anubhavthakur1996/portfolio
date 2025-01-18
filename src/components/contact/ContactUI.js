import { FaLinkedin, FaGitAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

const ContactUI = ({isMobile}) => {
  return (
    <div className="contact move-bottom-up">
      <span className={isMobile ? "title-mobile" : "title"}>You can find me on:</span>
      <div className="contact-list-container">
        <div className="contact-list shadow-one">
          {/* LinkedIn */}
          <div className="contact-row">
            <span className="contact-icon">
              <FaLinkedin style={{ color: "#0a66c2" }} />
            </span>
            <span className="contact-info">
              <a
                href="https://www.linkedin.com/in/anubhavthakur1996/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>

          {/* Git Hub */}
          <div className="contact-row">
            <span className="contact-icon">
              <FaGitAlt style={{ color: "#f54739" }} />
            </span>
            <span className="contact-info">
              <a
                href="https://www.linkedin.com/in/anubhavthakur1996/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>

          {/* E-Mail */}
          <div className="contact-row">
            <span className="contact-icon">
              <MdEmail style={{ color: "#0078d4" }} />
            </span>
            <span className="contact-info">
              <a
                href="https://www.linkedin.com/in/anubhavthakur1996/"
                target="_blank"
                rel="noreferrer"
              >
                E-Mail
              </a>
            </span>
          </div>

          {/* Number */}
          <div className="contact-row">
            <span className="contact-icon">
              <FcCellPhone />
            </span>
            <span className="contact-info">
              <a
                href="https://www.linkedin.com/in/anubhavthakur1996/"
                target="_blank"
                rel="noreferrer"
              >
                ***********
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUI;
