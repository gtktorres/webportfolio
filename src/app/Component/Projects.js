"use client"; // this is a client component 👈🏽
import React from "react";
import "../Client.css"
import Portrait from "../portrait.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "./Modal";
import Toxic from "./Project-Images/toxic.png";
import Repaycycle from "./Project-Images/repaycycle.png";
import InteractiveStory from "./Project-Images/InteractiveStory.png";
import github from "./Project-Images/github.ico";
import Image from "next/image";

const Projects = () => {
    return (
        <Container>
          
          <Row>
            <h1>Guevara Torres</h1>
          </Row>
          
          <Col>
            <Image height={500} width={370} src={Portrait} className="App-port" alt="Portrait" />
          </Col>
            
              
          <Col>      
            <Link to="/">
                  <Button
                    className="Button4"
                    type="Button"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                  >
                    Home
                  </Button>
            </Link>
            <Link to="/about">
                  <Button
                    className="Button1"
                    type="Button"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                  >
                    About Me
                  </Button>
            </Link>
            <Contact />
          </Col> 
          <Row className="Projects">
            <div>
              <h5>Projects</h5>
            </div>
          </Row>
          <Row><div className="Border">
              <Row>
                <h3>
                  Old-School DnD Interactive Story
                  <a
                    src={github}
                    href="https://github.com/gtktorres/StoneMarbel-Old-School-MERNG"
                    alt="old-school DnD"
                  >
                    <Image src={github} height="25" alt="github" />{" "}
                  </a>
                </h3>
              </Row>
              <Row>
                <Col>
                  <Image src={InteractiveStory} width="300" height="300" alt="Thanos" />
                </Col>
                <Col>
                  <ul>
                    <li>
                      Worked on a team of 2 that provides an interactive fiction application that allows a user to make
                      choices that allow for treasure and glory.
                    </li>
                    <li>
                      Implemented with Express and GraphQL for the backend and a mix of Twine(Snowman) and React
                      for the frontend. MongoDB for the database.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="Border">
              <Row>
                <h3>
                  Toxic Comment Model
                  <a
                    href="https://github.com/GueTorres/Toxic-Comment-Model"
                    alt="Toxic Model"
                  >
                    <Image src={github} height="25" alt="github" />{" "}
                  </a>
                </h3>
              </Row>
              <Row>
                <Col>
                  <Image src={Toxic} height="300" alt="Toxic Model" />
                </Col>
                <Col>
                  <ul>
                    <li>
                      Can identify toxicity in online conversations, where
                      toxicity is defined as anything rude, disrespectful or
                      otherwise likely to make someone leave a discussion
                    </li>
                    <li>
                      Implemented with Python and Tensorflow, the English data
                      provided for the competition trained the model in order to
                      predict toxicity from Wikipedia talk page comments in
                      several different languages.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="Border">
              <Row>
                <h3>
                  Repaycycle
                  <a
                    src={github}
                    href="https://github.com/GueTorres/RePayCycle"
                    alt="Repaycycle"
                  >
                    <Image src={github} height="25" alt="github" />{" "}
                  </a>
                </h3>
              </Row>
              <Row>
                <Col>
                <Image src={Repaycycle} height="300" alt="Repaycycle" />
                </Col>
                <Col>
                  <ul>
                    <li>
                      Our application is designed to associate with upgraded
                      versions of reverse vending recycling machines similar to
                      those found at supermarkets as well as a user&#39;s bank
                      account.
                    </li>
                    <li>
                      A user would log into the app, associate with the specific
                      machine they wish to use, effectively creating a situation
                      where recycling is not only convenient, but also
                      profitable.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            
          </Row>
        </Container>
    );
}

export default Projects;
