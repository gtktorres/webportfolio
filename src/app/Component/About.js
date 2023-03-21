"use client"; // this is a client component 👈🏽
import React from "react";
import "../Client.css"
import Portrait from "../portrait.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "./Modal";
import Image from "next/image";

const About = () => {
    return (
          <Container>
          
            <Row><h1>Guevara Torres</h1></Row>  

            <Row>
            <Col>
              <Image height={500} width={370} src={Portrait} className="App-port" alt="Portrait" />
            </Col>

              <Col>
                <Row>
                  <Link to="/">
                    <Button
                      className="Button1"
                      type="Button"
                      style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button
                      className="Button2"
                      type="Button"
                      style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                    >
                      Projects
                    </Button>
                  </Link>
                  <Contact />
                </Row>
              </Col>
            </Row>
            <Row>
              <div className="About">
                <h2>About Me</h2>
              </div>
            </Row>
            <Row>
              <div className="Border">
                <p>
                  I&#39;m a Software Developer with a Bachelor of Science
                  in Computer Science degree, with an interest in Fullstack applications.
                </p>
              </div>
            </Row>
            
          </Container>
  );
}

export default About;