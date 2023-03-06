import "../Button/Button.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImGithub } from "react-icons/im";
import { AiOutlineBehance, AiFillLinkedin } from "react-icons/ai";

const Button = (props) => {
  return (
    <div className="btn">
      <a href={props.link} className={props.styling}>
        <span>{props.text}</span>
      </a>
    </div>
  );
};

export default Button;
