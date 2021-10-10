import './Hero.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

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
          I am a Frontend Developer and UI Designer. Currently, I spend
          most of my time honing my development & design skills. Learning
          new skills and improving on what I already know is a strong
          passion of mine.
        </p>
        <Button className="app__hero__cta btn-green my-3">
          View My Resume
        </Button>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Hero;