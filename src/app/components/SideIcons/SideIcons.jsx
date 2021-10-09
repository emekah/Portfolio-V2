import './SideIcons.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImBehance } from "react-icons/im";

const SideIcons = () => {
  return (
    <div className="sideIcons">
        <ul>
          <li className="github text-skyblue">
            <a
              href="https://www.github.com/emekah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="social-icon " />
            </a>
          </li>
          <li className="linkedin text-skyblue">
            <a
              href="https://www.linkedin.com/in/emeka-peacewill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="social-icon mt-3" />
            </a>
          </li>
          <li className="behance text-skyblue">
            <a
              href="https://www.behance.net/emekah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImBehance className="social-icon mt-3" />
            </a>
          </li>
          <li className="email text-skyblue">
            <a href="mailto:emekah@icloud.com">
              <HiOutlineMail className="social-icon mt-3" />
            </a>
          </li>
        </ul>
      </div>
  );
};

export default SideIcons;