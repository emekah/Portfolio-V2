import "../Footer/Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { ImGithub } from "react-icons/im";
import { AiOutlineBehance, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-2 pt-5" id="contact">
      <div className="footer__container">
        <div className="footer__header">
          <h3>Get In Touch</h3>
        </div>
        <div className="footer__desc">
          <p className="text-skyblue">
            Meeting amazing people is one of the greatest things in life. Feel
            free to get in touch!
          </p>
        </div>
        <div className="footer__cta">
          <Button className="app__hero__cta btn-green my-3">Say Hello</Button>
        </div>
        <div className="footer__icons">
          <div className="footer__icons__github">
            <ImGithub
              className="text-green"
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
          </div>
          <div className="footer__icons__behance">
            <AiOutlineBehance
              className="text-green"
              style={{ fontSize: "30px", marginRight: "10px" }}
            />
          </div>
          <div className="footer__icons__linkedin">
            <AiFillLinkedin
              className="text-green"
              style={{ fontSize: "25px", marginRight: "10px" }}
            />
          </div>
        </div>
        <div className="footer__credit pt-5">
          <p>Designed and Developed by Emeka Osuji</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
