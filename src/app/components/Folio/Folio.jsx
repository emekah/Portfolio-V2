import "../Folio/Folio.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Work1 from "../../assets/images/destination-4.jpg";
import Work2 from "../../assets/images/portfolio.jpg";
import Work from "../Work/Work";
import Work3 from "./../../assets/images/portcv-2.jpg";
import Work4 from "./../../assets/images/todo.png";

const Folio = () => {
  return (
    <div className="work container-centered">
      <div className="row g-3">
        <Work
          image={Work2}
          alt="Second Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Portfolio Website"
          link="https://emekaosuji.netlify.app"
          subtitle="React JS"
        />
        <Work
          image={Work1}
          alt="First Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Janded"
          link="https://emekah.github.io/Janded/"
          subtitle="HTML • CSS"
        />

        <Work
          image={Work3}
          alt="Third Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Wedah App"
          link="https://emekah.github.io/wedah/"
          subtitle="Vanilla Javascript"
        />
        <Work
          image={Work4}
          alt="Fourth Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Todo App"
          link="https://emekah.github.io/todo/"
          subtitle="HTML • CSS • Javascript"
        />
      </div>
    </div>
  );
};

export default Folio;
