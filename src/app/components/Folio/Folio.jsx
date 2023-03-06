import "../Folio/Folio.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Work1 from "../../assets/images/destination-4.jpg";
import Work2 from "../../assets/images/portfolio.jpg";
import Work from "../Work/Work";
import Work3 from "./../../assets/images/portcv-2.jpg";
import Work4 from "./../../assets/images/emeka-gradient.jpg";

const Folio = () => {
  return (
    <div className="container work container-centered">
      <div className="row">
        <Work
          image={Work1}
          alt="First Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Janded"
          link='https://emekah.github.io/Janded/'
        />
        <Work
          image={Work2}
          alt="Second Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Portfolio"
        />
        <Work
          image={Work3}
          alt="Third Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Wedah App"
          link='https://emekah.github.io/wedah/'
        />
        <Work
          image={Work4}
          alt="Fourth Work"
          // eslint-disable-next-line react/style-prop-object
          style="btn-fill"
          text="Color Flipper"
          link='https://emekah.github.io/color-flipper/hex.html'
        />
        
      </div>
    </div>
  );
};

export default Folio;
