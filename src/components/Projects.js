import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Nav from "react-bootstrap/Nav";
import colorSharp2 from '../assets/img/color-sharp2.png';
import biggest from "../assets/img/biggest.png";
import robots from "../assets/img/robots.jpg";
import fashionwap from "../assets/img/fashionwap.jpg";
import inspire from "../assets/img/inspire.png";
import weather from "../assets/img/weather.png";
import assuagement from "../assets/img/assuagement.png";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () =>{

    const projects = [
         {
            title: "Biggest Startup",
            description: "Landing Page",
            imgUrl: biggest,
            url: "https://alexwindy0.github.io/biggest-startup/"
         },
         {
            title: "Robo Friends",
            description: "React-dev",
            imgUrl: robots,
            url: "https://robocardbox.netlify.app/"
         },
         {
            title: "Fashion Wap",
            description: "Model's Gallery",
            imgUrl: fashionwap,
            url: "https://alexwindy0.github.io/fashionwap/"
         },
         {
            title: "Inspire Me",
            description: "Inspirational Quotes",
            imgUrl: inspire,
            url: "https://inspire-me-react.netlify.app/"
         },
         {
            title: "Weather Application",
            description: "React-Weather-PWA",
            imgUrl: weather,
            url: "https://calm-weather-app.netlify.app/"
         },
         {
            title: "Assuagement Foundation",
            description: "Charity",
            imgUrl: assuagement,
            url: "https://assuagement-foundation.netlify.app/"
         },
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                          Each project was designed using React.js, Node.js, react-bootstrap & React libraries/components. 
                          All Portfolio Projects differ from first to last.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            Tab Three
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="text-center">Coming Soon</Tab.Pane>
                            <Tab.Pane eventKey="third" className="text-center">Coming Soon</Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img" />
        </section>
    )
}