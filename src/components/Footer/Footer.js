import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "rgb(161, 194, 233)",
      }}
    >
      <footer
        style={{
          width: "100%",
          position: "relative",
          marginTop: "50px",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>
                @{new Date().getFullYear()} Science Facts. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
