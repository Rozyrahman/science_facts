import React from "react";

import mainCreator from "../../../img/nabila.jpeg";

import { Card, Container } from "react-bootstrap";
import "./About.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const About = () => {
  return (
    <Container>
      <div
        style={{
          display: "block",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="grid about-page"
          style={{
            display: "grid",
            padding: "50px",
            maxWidth: "100%",
            wordBreak: "break-word",
            color: "#2E475D",
          }}
        >
          <h1 style={{ textAlign: "center" }}>ABOUT SCIENCE FACTS</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>
          <br />
          <h2>Facalities</h2>
          <br />
          <ul>
            <li>Know about science facts</li>
            <li>Share what you know</li>
            <li>Increase you knowladge</li>
          </ul>

          <br />
          <h2 style={{ textAlign: "center" }}>Contact us</h2>
          <br />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since tpecimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
          </p>
          <ul style={{ listStyle: "none" }}>
            <li style={{ textDecoration: "none" }}>
              <a
                className="contactIcona"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                <icon
                  className="contactIcon"
                  style={{
                    fontSize: "20px",
                    margin: "5px",
                  }}
                >
                  {" "}
                  <FaTwitter fa-rotate-90 />
                  <a
                    href="https://www.twitter.com/"
                    style={{
                      fontSize: "20px",
                      margin: "5px",
                      color: "rgb(13, 13, 112)",
                      textDecoration: "none",
                    }}
                  >
                    Twitter
                  </a>
                </icon>
              </a>
              <br />
              <a
                className="contactIcona"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                <icon
                  className="contactIcon"
                  style={{ fontSize: "20px", margin: "5px" }}
                >
                  {" "}
                  <FaFacebook />
                  <a
                    href="https://www.facebook.com/"
                    style={{
                      fontSize: "20px",
                      margin: "5px",
                      color: "rgb(13, 13, 112)",
                      textDecoration: "none",
                    }}
                  >
                    Facebook
                  </a>
                </icon>
              </a>
              <br />
              <a
                className="contactIcona"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", fontSize: "15px" }}
              >
                <icon
                  className="contactIcon"
                  style={{ fontSize: "20px", margin: "5px" }}
                >
                  {" "}
                  <FaInstagram />
                  <a
                    href="https://www.instagram.com/"
                    style={{
                      fontSize: "20px",
                      color: "rgb(13, 13, 112)",
                      margin: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Instagram
                  </a>
                </icon>
              </a>
            </li>{" "}
          </ul>
          <br />
        </div>
        <br />
        <br />

        <div>
          {" "}
          <h1 style={{ textAlign: "center" }}>Creator</h1>
        </div>
        <div
          style={{
            justifyContent: "Center",
            display: "grid",
            maxWidth: "100%",
          }}
        >
          {/* ------------------Creator------------------ */}
          <div className="CreatorcardCss">
            <div className="CreatorcardDiv">
              <Card className="Creatorcard">
                <Card.Img
                  className="creatorImg"
                  variant="top"
                  src={mainCreator}
                />

                <Card.Body>
                  <h4 className="aboutcardTitle">Nabila Afrose Choity</h4>
                  <Card.Subtitle className="mb-2 text-muted">
                    Creator
                  </Card.Subtitle>
                  <Card.Text>
                    Hello everyone!Its me Nabila & I am the main developer here.
                    Not a perfect but trying my best.
                  </Card.Text>
                  <p>
                    Hope everyone enjoying this site. It will great expriences
                    to all with{" "}
                    <a style={{ color: "purple" }}> Science facts</a> Stay
                    connected with us
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Container>
  );
};

export default About;
