import "../Project/Project.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectFlip = (props) => {
  return (
    <div className="row work__content">
      <div className="col-lg-6 order-lg-1 order-sm-2 order-2">
        <p className="text-green text-small">{props.projectTitle}</p>
        <div className="work__header">
          <h3>{props.title}</h3>
          <div className="work__header__icons">
            <a href={props.url} target="_blank" rel="noreferrer" className="mx-3">
              <FiExternalLink className="work__header__ext-link" />
            </a>
            <a href={props.url2} target="_blank" rel="noreferrer">
              <FiGithub className="work__header__ext-link" />
            </a>
          </div>
        </div>

        <p className="py-4">{props.desc}</p>
        <div className="work__footer">
          <div className="text-green">
            <p>{props.techOne}</p>
          </div>
          <div className="text-green">
            <p>{props.techTwo}</p>
          </div>
          <div className="text-green">
            <p>{props.techThree}</p>
          </div>
          <div className="text-green">
            <p>{props.techFour}</p>
          </div>
          <div className="text-green">
            <p>{props.techFive}</p>
          </div>
          <div className="text-green">
            <p>{props.techSix}</p>
          </div>
          <div className="text-green">
            <p>{props.techSeven}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 work__first order-lg-2 order-sm-1 order-1">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img src={props.imageSource} alt="Heyward" />
        </a>
      </div>
    </div>
  );
};

export default ProjectFlip;
