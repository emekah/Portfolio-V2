import "../Footer/Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./../Button/Button";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row g-4 p-3">
        <div className="col-12">
          <h1 className="footer__title">Get In Touch</h1>
          <p className="footer__subtitle">
            Feel free to get in touch, let's create some amazing stuff!
          </p>
          <div className="footer__cta">
            <Button styling="btn-fill" text="Contact Me" link="mailto:emekah@icloud.com" />
            <div className="footer__cta__icons">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/emeka-peacewill/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/emekah"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/emekah"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__credit">
            <span>Designed and Developed by Emeka Osuji</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
