import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import jceLogo from "../Assets/College Img/fav.png";
import jceBanner from "../Assets/College Img/jce-logo.png";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Left-aligned logo */}
        <Navbar.Brand href="#">
          {/* <img src={jceLogo} width="48px" height="48px" alt="" /> */}
          <img src={jceBanner} height="60px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Right-aligned navigation links */}
            <Nav.Link href="#home">Home</Nav.Link>
            {/* Department Choose with dropdown */}
          
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
