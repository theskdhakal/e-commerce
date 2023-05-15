import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserEdit } from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.JPG";

export const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" className="image" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/registration" className="nav-link">
              <FaUserEdit className="fs-3" />
            </Link>
            <Link to="/login" className="nav-link">
              <GoSignIn className="fs-3" />
            </Link>
            <Link to="/logout" className="nav-link">
              <GoSignOut className="fs-3" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
