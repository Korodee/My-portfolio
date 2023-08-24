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
                With an acute attention to detail and a collaborative mindset,
                <br></br> I specialize in crafting responsive and accessible
                interfaces that excel across all devices. <br></br>By infusing
                each project with creativity and innovation,<br></br> I am
                dedicated to surpassing expectations in every frontend
                development endeavor.
                <br></br> My mission is to deliver exceptional services that
                enhance digital experiences <br></br>and consistently exceed
                your project goals.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter2" />
                  <h5>JavaScript/TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter3" />
                  <h5>React/Angular/Vue.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter4" />
                  <h5>jQuery/Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter5" />
                  <h5>SASS/SCSS/LESS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
