import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import nutritionguide from "../assets/img/nutritionguide.png";


function Projects () {

    const projects = [
        {
          title: "Nutrition Guide",
          description: "Nutritional health diet guide utilizing Python, JS, Flask, and PostgreSQL.",
          imgUrl: nutritionguide,
        projectUrl: "https://diet-playlist.herokuapp.com/",
        },
        {
          title: "Jobly",
          description: "A job search app built with React, Node, Express, and PostgreSQL.",
          imgUrl: projImg2,
          projectUrl: "https://react-jobly-a62x.onrender.com",
        },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",          
        //   imgUrl: projImg3,
        //     projectUrl: "https://diet-playlist.herokuapp.com/",
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg1,
        //     projectUrl: "https://diet-playlist.herokuapp.com/",
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg2,
        //     projectUrl: "https://diet-playlist.herokuapp.com/",
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg3,
        //     projectUrl: "https://diet-playlist.herokuapp.com/",
        // },
      ];



return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my projects, </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Random</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Here are some of my projects.. Tab1 are original apps developed with known stacks. Stacks2 are web3 apps im working on...</p>
                    </Tab.Pane>                   
                     <Tab.Pane eventKey="second">
                      <p>More projects coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Some of my smaller works</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
           
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )


}

export default Projects;