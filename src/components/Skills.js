import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Writing well designed, testable, efficient code by using best
                software development practices. <br></br>Creating website
                layout/user interfaces by using standard HTML/CSS practices.
                <br></br> Integrating data from various back-end services and
                databases.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML/CSS/SASS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>BOOTSTRAP/WORDPRESS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>REACT/GIT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
