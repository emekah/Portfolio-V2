import "./Work.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./../Project/Project";
import ProjectFlip from "../ProjectFlip/ProjectFlip";
import Heyward from "./../../assets/images/heywardPortfolio.png";
import Portfolio from "./../../assets/images/portcv.jpg";
import Wedah from "./../../assets/images/portcv-2.jpg";
import Timpa from "./../../assets/images/timpa-proj.png";
import Avo from "./../../assets/images/avo-proj.png";
// import UI from "./../../assets/images/ui-design.png";

const Work = () => {
  return (
    <div className="container app__container">
      <div className="work" id="projects">
        <h3 className="mb-4">Some Recent Frontend Projects</h3>

        <Project
          desc="Of course I had to make me a website too! This portfolio website was developed using React, SCSS and Bootstrap. I also made the design using Adobe XD."
          imageSource={Portfolio}
          projectTitle="Personal Project"
          url="https://emekaosuji.netlify.app"
          url2="https://github.com/emekah/Portfolio-V2"
          title="Portfolio Website"
          techOne="React"
          techTwo="SCSS"
          techThree="Bootstrap"
          techFour=""
          techFive=""
          techSix=""
          techSeven=""
        />

        <hr className="horizontal-line" />

        <ProjectFlip
          desc="A single-page website developed using React JS also utilising useSate and useEffect "
          imageSource={Avo}
          projectTitle="Personal Project"
          url="https://avocars.netlify.app"
          url2="https://github.com/emekah/Avo"
          title="Avo"
          techOne="React"
          techTwo="SCSS"
          techThree=""
          techFour=""
          techFive=""
          techSix=""
          techSeven=""
        />

        <hr className="horizontal-line" />

        <Project
          desc="A simple weather app I built using HTML, CSS and Vanilla Javascript."
          imageSource={Wedah}
          projectTitle="Featured Project"
          url="https://emekah.github.io/wedah/"
          title="Wedah"
          techOne="HTML"
          techTwo="SCSS"
          techThree="Bootstrap"
          techFour="Vanilla Javascript"
          techFive=""
          techSix=""
          techSeven=""
        />

        <hr className="horizontal-line" />

        <ProjectFlip
          desc="A web redesign and relaunch project for Heyward Group. This is by far one of the most
                  challenging projects I have worked on whilst at Mr.Highline. I was responsible for creating a fresh look for their
                  old website and later worked closely with the senior developer to develop this amazing website."
          imageSource={Heyward}
          projectTitle="Featured Project"
          url="https://www.heyward.group"
          title="Heyward Group"
          techOne="HTML"
          techTwo="SCSS"
          techThree="Bootstrap"
          techFour="Wordpress"
          techFive="PHP"
          techSix=""
          techSeven=""
        />

        <hr className="horizontal-line" />

        <Project
          desc="A one-page site builder website I developed using HTML and CSS"
          imageSource={Timpa}
          projectTitle="Personal Project"
          url="https://emekah.github.io/timpa/"
          url2="https://github.com/emekah/timpa/"
          title="Timpa"
          techOne="HTML"
          techTwo="CSS"
          techThree="Bootstrap"
          techFour=""
          techFive=""
          techSix=""
          techSeven=""
        />

        <hr className="horizontal-line" />

        
      </div>
    </div>
  );
};

export default Work;
