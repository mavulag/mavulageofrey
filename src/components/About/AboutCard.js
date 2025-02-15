import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mavula Geofrey </span>
            from <span className="purple"> Dar es Salaam, Tanzania.</span>
            <br />
            I am currently employed as a Solution Analyst at CRDB BANK PLC.
            <br />
            I have completed Bachelor of Science (BSc) in Computer Science at University of Dar es Salaam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Tech Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mavula</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
