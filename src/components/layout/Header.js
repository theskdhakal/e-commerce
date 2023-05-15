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
    <Navbar bg="dark" variant="daek" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/registration">
                <FaUserEdit className="fs-3" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">
                <GoSignIn className="fs-3" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/logout">
                <GoSignOut className="fs-3" />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
