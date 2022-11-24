import "./Hero.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="container app__container">
      <div className="row app__hero" id="hero">
        <div className="col-lg-9">
          <div className="app__hero__name">
            <p className="app__hero__name__first">Hi, my name is </p>
            <p className="app__hero__name__second">
              <b>
                <span className="text-green text-bold ">Emeka Osuji.</span>
              </b>
            </p>
            {/* <div className="horizontal-line"></div> */}
            <h1 className="text-bold text-arimo app__hero__job">
              I build things for the web
            </h1>
            <p className="app__hero__desc pt-3">
              I am a Front-end Developer with a background of UI Design. I am a very passionate learner and problem solving is one of my many strengths.
            </p>
            <div className="btn__hero">
              <Button className="app__hero__cta btn-green my-3">
                <Link to="projects">View My Frontend Projects</Link>
              </Button>
              <Button className="app__hero__cta__second btn-green my-3">
                <a href="https://www.emekah.net" className="text-white" target={"_blank"} without rel="noreferrer">View My UI Design Projects</a>
              </Button>
            </div>
            
          </div>
        </div>
        <div className="scroll justify-content-center">
          <p>Scroll Down</p>
          <AiOutlineArrowDown className="text-green"/>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
