import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Househaeds",
      description: "The first interdimensional digital collectibles coming from the parallel world of Aeterna.",
      imgUrl: projImg12,
    },
    {
      title: "Meeps",
      description:
        "MEEPS is a 5,555 NFTs collection built using an ERC 721A contract.",
      imgUrl: projImg1,
    },
    {
      title: "Feellings",
      description:
        "Feellings is a Dapp that allows you to create and own NFTs.",
      imgUrl: projImg2,
    },
    {
      title: "Gods of Egypt",
      description:
        "The Gods of Egypt is the first ever NFT treasure hunt that puts you in the arena.",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Kite-Fighters",
      description:
        "A crossover VR x NFT gaming experience featuring one of the world's most exciting & obscure sports. KITE FIGHTING",
      imgUrl: projImg5,
    },
    {
      title: "NATSUKI",
      description: "Utilizing the NFT space to provide real world utility!",
      imgUrl: projImg6,
    },
    {
      title: "Teenage Innovators",
      description:
        "4444 Teen Entrepreneurs proving that they have earned their spot in the business world | Created by 15yo",
      imgUrl: projImg7,
    },
    {
      title: "Kite-Fighters / Mint",
      description: "Mint platform for kite-fighters",
      imgUrl: projImg8,
    },
  ];
  const projects3 = [
    {
      title: "Meta-Land Society",
      description:
        "Creating a blue-chip metaverse ecosystem powered by an asset backed token.",
      imgUrl: projImg4,
    },
    {
      title: "Claim-surrender-game",
      description: "Utilizing the NFT space to provide real world utility!",
      imgUrl: projImg9,
    },
    {
      title: "Delivery Dudes",
      description: "Utilizing the NFT space to provide real world utility!",
      imgUrl: projImg10,
    },
    {
      title: "Clock",
      description: "Built With react javascript",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="project-texts">
                    "I've successfully completed a diverse range of projects as
                    a professional frontend developer. Notably, I created a
                    React-based workout application with an intuitive interface
                    and integrated backend API, as well as an Angular-based
                    e-commerce website that was responsive and easy to navigate.
                    <br></br>I'm also experienced with smaller projects such as
                    landing pages and marketing websites. My code is always
                    clean, efficient, and maintainable."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project2, index) => {
                            return <ProjectCard key={index} {...project2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project3, index) => {
                            return <ProjectCard key={index} {...project3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
