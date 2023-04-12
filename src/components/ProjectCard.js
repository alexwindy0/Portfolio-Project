import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return(
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="img" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <p className="linktag">
                    <a href={url} target="_">View Live</a>
                </p>
            </div>
        </div>
        </Col>
    )
}