import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Your College Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>

            <Dropdown>
              <Dropdown.Toggle as="a" id="navbarDropdown" role="button">
                Departments
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="department/cse">CSE</Dropdown.Item>
                <Dropdown.Item href="department/eee">EEE</Dropdown.Item>
                <Dropdown.Item href="department/ece">ece</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
