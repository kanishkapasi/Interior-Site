import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logoOne from "../../Images/navLogo.png";

import "./Navigation.css";

function OffcanvasExample() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navi"
      >
        <Container>
          <div className="logo d-flex flex-row align-items-center">
            <img
              src={logoOne}
              alt=""
              style={{
                width: "150px",
                height: "50px",
              }}
            />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navLinks">
              <Nav.Link as={Link} to={"/"} className="list">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"} className="list">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/Services"} className="list">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to={"/Project"} className="lis">
                Project
              </Nav.Link>
              <Nav.Link as={Link} to={"/Contact"} className="list">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
