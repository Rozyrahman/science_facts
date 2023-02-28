import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Home.css";
import BannerImg from "../../../img/banner.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homediv">
      <div>
        {/* -------- banner img----------- */}
        <div style={{ position: "relative" }} className="bannerimg">
          <img
            style={{ width: "100%", height: "600px" }}
            alt="#"
            src={BannerImg}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#ffffff",
            }}
          >
            <div className="bannerMainTitle">
              <h1>
                Science <a style={{ color: "brown" }}>Facts</a>
              </h1>
            </div>

            <br />
            <div className="hlwhereText">
              <h3>HELLO THERE</h3>
              <div>
                <h6 className="PutCursorTitle">Put your cursor here</h6>
                <h4 className="PutCursorContent">
                  Visit the site. Hope you like it...THANK YOU!
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* --------------card------------ */}

        <Container>
          <br />
          <div className="wrapper">
            <div className="staticText">
              What is Science
              <ul className="dynamicText">
                <li>
                  <span>
                    Science is the study of the nature and behaviour of natural
                    things and the knowledge that we obtain about them
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="topics mt-5">
            <h1 style={{ color: "#081fa5" }}>Topics</h1>
            <hr
              style={{
                width: "10%",
                height: "2px",
                color: "black",
                backgroundColor: "black",
              }}
            />
          </div>
          <div className="cardCss">
            <div className="cardDiv">
              <Card className="card">
                <Card.Body>
                  <Card.Title>AIR</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted ">
                    - Reader's Digest
                  </Card.Subtitle>
                  <Card.Text>
                    As a gas, oxygen is odourless and colourless. In its liquid
                    and solid forms, however, it looks pale blue.
                  </Card.Text>
                  {/* Card.Link */}
                  <Link className="cardLink" to="/sciFact">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
              {/* --- */}
              <Card className="card">
                <Card.Body>
                  <Card.Title>WATER</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    - Dammy Text
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also t
                  </Card.Text>
                  <Link className="cardLink" to="/dummyText">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title>HUMAN</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    - Dammy Text
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also t
                  </Card.Text>
                  <Link className="cardLink" to="/dummyText">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title>DREAM</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    - Dammy Text
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also t
                  </Card.Text>
                  <Link className="cardLink" to="/dummyText">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title>EARTH</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    - Dammy Text
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Card.Text>
                  <Link className="cardLink" to="/dummyText">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body>
                  <Card.Title>SPACE</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    - Dammy Text
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also t
                  </Card.Text>
                  <Link className="cardLink" to="/dummyText">
                    SEE MORE
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;

// ------card height
