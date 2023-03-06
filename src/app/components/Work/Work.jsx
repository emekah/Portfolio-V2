/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import "./Work.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router"
import Button from "./../Button/Button";
import FirstWork from "../../assets/images/destination-4.jpg";
import Project from "./../Project/Project";
import ProjectFlip from "../ProjectFlip/ProjectFlip";
import Heyward from "./../../assets/images/heywardPortfolio.png";
import Portfolio from "./../../assets/images/portcv.jpg";
import Wedah from "./../../assets/images/portcv-2.jpg";
import Timpa from "./../../assets/images/timpa-proj.png";
import Avo from "./../../assets/images/avo-proj.png";
// import UI from "./../../assets/images/ui-design.png";

const Work = (props) => {
  return (
    <div className="col-lg-6 col-sm-12 work-col">
      
        <a href={props.link} target='_blank' rel="noreferrer" className="work-col__img">
          <img
            className="work-col__img__image"
            src={props.image}
            alt={props.alt}
          />
          <div className="work-col__title">
          <Button styling={props.style} text={props.text} link={props.link} />
            {/* <a href={props.link} target='_blank' rel="noreferrer" className={props.style}>
              <h5>{props.text}</h5>
            </a> */}
          </div>
        </a>
      
    </div>
  );
};

export default Work;
