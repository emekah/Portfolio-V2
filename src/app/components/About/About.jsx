import "./About.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Emeka from "./../../assets/images/emekah3.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row about" id="about">
        <div className="col-lg-8">
          <h3>About Me</h3>
          <p className="about__desc">
            Hiya! My name is Emeka Osuji and I have a passion for creating
            awesome web experiences. My journey began when I took the initiative
            to help a friend design her album cover art with Photoshop. This
            gradually developed into UI design and then gradually I started
            learning HTML, CSS & Javascript.
            <br />
            <br />
            Fast-forward to today, I've had the privilege of developing amazing
            websites whilst working at a startup and as a freelance developer. I
            am passionate about continuous improvement as I know the IT industry
            is forever evolving!.
            <br />
            <br />
            Below are a few technologies I've been working with recently:
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
              <p className="text-green px-2">REACT JS</p>
            </div>
            <div className="col-4 about__tech">
              <div className="logo-square"></div>
              <p className="text-green px-2">WORDPRESS</p>
            </div>
            <div className="col-4 about__tech">
              <div className="logo-square"></div>
              <p className="text-green px-2">GIT</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 about__image">
          <img src={Emeka} alt="EmekaPic" />
        </div>
      </div>
    </div>
  );
};

export default About;
