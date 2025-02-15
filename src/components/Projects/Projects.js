import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import product from "../../Assets/Projects/product-del.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Delivery"
              description="Product Delivery"
              ghLink="https://github.com/mavulag/product-del"
              demoLink="https://product-del-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AP-Powered Chatbot Platform"
              description="AP-Powered Chatbot Platform"
              ghLink="https://github.com/mavulag"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social Media Sentiment Analyzer"
              description="Social Media Sentiment Analyzer"
              ghLink="https://github.com/mavulag"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Collaborative Code Editor"
              description="Collaborative Code Editor"
              ghLink="https://github.com/mavulag"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Personal Finance Tracker with Budgeting"
              description="Personal Finance Tracker with Budgeting"
              ghLink="https://github.com/mavulag"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-Learning Platform with Quizzes"
              description="E-Learning Platform with Quizzes"
              ghLink="https://github.com/mavulag"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
