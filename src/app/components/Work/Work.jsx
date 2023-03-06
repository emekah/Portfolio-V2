/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import "./Work.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./../Button/Button";

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
