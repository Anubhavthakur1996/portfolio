import { Typography } from "antd";
import { FaLinkedin, FaGitAlt } from "react-icons/fa";
import { FcBinoculars } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import Contact from "../../assets/contact.png";
// import { FcCellPhone } from "react-icons/fc";

const { Title } = Typography;

const ContactUI = ({ isMobile }) => {
  return (
    <div className="contact move-bottom-up">
      {/* <span className={isMobile ? "title-mobile" : "title"}>
        <Title>
          <FcBinoculars />
          &nbsp; You Can Find Me On: &nbsp; <FcBinoculars />
        </Title>
      </span> */}

      <img
        src={Contact}
        alt="endorsement"
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
                href="https://anubhavthakur1996.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub
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
                href="mailto:anubhavthakur1996@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                E-Mail Me
              </a>
            </span>
          </div>

          {/* Number */}
          {/* <div className="contact-row">
            <span className="contact-icon">
              <FcCellPhone />
            </span>
            <span className="contact-info">+91******** | +91********</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUI;
