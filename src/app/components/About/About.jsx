import './About.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Emeka from "./../../assets/images/emekah3.jpg";


const About = () => {
  return (
    <div className="app__container">
    <div className="row about">
          <div className="col-lg-6">
            <h3>About Me</h3>
            <p className="about__desc">
              Hiya! My name is Emeka Osuji and I have a passion for creating
              awesome software experiences. My journey began in 2018 when I took
              the initiative to help a friend design her album cover art. This
              single act led me to learning about Graphic Design with Photoshop
              and Adobe Illustrator. I later went on to learn UI Design with
              Adobe XD. I took great interest in how the web works and this
              curiosity started my journey in web development. <br />
              <br />
              Fast-forward to today, I’ve had the privilege of working with the
              following technologies:
            </p>
            <div className="row">
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">HTML & CSS</p>
              </div>
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">SASS</p>
              </div>
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">BOOTSTRAP</p>
              </div>
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">JAVASCRIPT</p>
              </div>
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">REACT JS</p>
              </div>
              <div className="col-4 about__tech">
                <div className="logo-square"></div>
                <p className="text-green px-2">GIT</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 about__image">
            <img src={Emeka} alt="EmekaPic" />
          </div>
        </div>
        </div>
  );
};

export default About;