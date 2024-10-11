import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
        title: "Project EcoVista",
        description: "An innovative smart bin that automatically segregates waste with litter detection technology, supported by a comprehensive application for waste management.",
        imgUrl: projImg1, // Replace with the actual image variable
    },
    {
        title: "TodoList App",
        description: "A task management app developed in Flutter, integrating data structures for efficient organization and prioritization of tasks.",
        imgUrl: projImg2, // Replace with the actual image variable
    },
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
                <p>One of the major projects, Project EcoVista, is an innovative solution that combines a smart bin that automatically segregates waste with litter detection technology to reduce littering, all supported by a comprehensive application for real-time insights into waste management. Complementing this initiative is a TodoList App developed in Flutter, which enhances task management through integrated data structures like list arrays and linked lists, allowing users to efficiently organize and prioritize their tasks.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                      <p>Thank you for visiting my portfolio! If you have any questions or need assistance with projects, please feel free to contact me. I'm always eager to collaborate and share ideas. Your feedback is valuable, and I'm here to help!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Thank you for visiting my portfolio! If you have any questions or need assistance with projects, please feel free to contact me. I'm always eager to collaborate and share ideas. Your feedback is valuable, and I'm here to help!</p>
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
