"use client"; // this is a client component 👈🏽
import React from "react";
import '../styles/client.css'
import Portrait from '../components/Project-Images/portrait.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "./Modal";
import Image from "next/image";

const Home = () => {

  return (
        <Container>
          
          <Row >
            <h1>Guevara Torres</h1>
          </Row>
          <Row>
            <Col>
              <Image height={500} width={370} src={Portrait} className="App-port" alt="Portrait" />
            </Col>

            <Col>
              <Row>
                <Link to="/about">
                    <Button
                    className="Button1"
                    type="Button"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                    >
                    About Me
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
        </Container>
  );
};

export default Home;
