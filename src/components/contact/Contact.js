import { FaLinkedin, FaGitAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

const Contact = () => {
  return (
    <div className="contact">
      <span className="title">You can find me on:</span>
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
              +911234567890
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
