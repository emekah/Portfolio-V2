import "./Hero.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Emeka from "./../../assets/images/emeka-portrait.jpg";
import Resume from "./../../views/Resume";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row hero-row justify-content-center g-lg-3 g-1">
        <div className="col-lg-8 col-md-12 col-sm-12 order-sm-1 order-last col-border">
          <div className="hero__left ">
            <h1 className="hero__left__title">
              Hello, I'm Emeka, a piano player who is passionate about designing
              and building things for the web.
            </h1>
            <p className="hero__left__subtitle">
              I have built and designed brilliant web and mobile apps. I enjoy
              the process of bringing ideas from conceptual stage to
              actualization stage. The sheer joy of overcoming every huddle
              along the way keeps me motivated. Constant learning and team work
              is a major strenght of mine. When I'm not coding, I am either
              writing a song, playing piano or spending quality time with
              family.
            </p>
            <p className="hero__left__skills text-black text-bold">
              HTML • CSS • Tailwind CSS • Bootstrap • JavaScript • React
            </p>
            <div className="hero__left__cta">
              <a
                href="https://drive.google.com/file/d/1AVrrjncOnyfO8Pfihibk1qZoQromgxrd/view?usp=share_link"
                target="_blank"
                className="hero__left__cta__btn btn-outline mr-2"
                
              >
                View My Resume
              </a>
              <a
                href="mailto:emekah@icloud.com"
                className="hero__left__cta__btn btn-outline "
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 order-lg-2 hero__right col-border">
          <img src={Emeka} alt="Profile Photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
