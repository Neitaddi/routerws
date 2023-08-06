import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import "./NavBare.css";
const NavBare = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive && "none",
    };
  };
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="Container">
          <Navbar.Brand href="#home">
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <NavLink to="/about" style={navLinkStyle}>
                About
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBare;
