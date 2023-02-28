import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navber.css";
import Logo from "../../img/logo.webp";
import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navberdiv">
      <Navbar expand="lg" className="navberr">
        <Container>
          <Navbar.Brand href="/">
            <img alt="#" src={Logo} style={{ height: "50px", width: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 nav"
              style={{
                maxHeight: "100px",
                marginLeft: "auto",
              }}
              navbarScroll
            >
              <NavLink to="/" className="navlinks">
                Home
              </NavLink>
              <NavLink to="/About" className="navlinks">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
