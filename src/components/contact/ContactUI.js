import { Typography } from "antd";
import { FaLinkedin, FaGitAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Contact from "../../assets/contact.png";

const { Link } = Typography;

const ContactUI = ({ isMobile, logoClick }) => {
  return (
    <div className="contact move-bottom-up">
      <img
        src={Contact}
        alt="endorsement"
        onClick={logoClick}
        className={
          (isMobile ? "profile-image-mobile" : "profile-image") +
          " scale-in-out"
        }
      />
      <div
        className={
          isMobile ? "contact-list-container-mobile" : "contact-list-container"
        }
      >
        <div className="contact-list shadow-one">
          {/* LinkedIn */}
          <div className="contact-row">
            <span className="contact-icon">
              <FaLinkedin style={{ color: "#0a66c2" }} />
            </span>
            <span className="contact-info">
              <Link
                className="link"
                href="https://www.linkedin.com/in/anubhavthakur1996/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
            </span>
          </div>

          {/* Git Hub */}
          <div className="contact-row">
            <span className="contact-icon">
              <FaGitAlt style={{ color: "#f54739" }} />
            </span>
            <span className="contact-info">
              <Link
                className="link"
                href="https://github.com/Anubhavthakur1996"
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub
              </Link>
            </span>
          </div>

          {/* E-Mail */}
          <div className="contact-row">
            <span className="contact-icon">
              <MdEmail style={{ color: "#0078d4" }} />
            </span>
            <span className="contact-info">
              <Link
                className="link"
                href="mailto:anubhavthakur1996@outlook.com"
              >
                E-Mail Me
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUI;
