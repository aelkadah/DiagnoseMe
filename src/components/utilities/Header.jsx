import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <Navbar className="shadow-sm mb-3 py-1" expand="md">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img src={logo} alt="logo" height="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-md"
              to="/"
              as={Link}
            >
              <img src={logo} alt="logo" height="50px" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 gap-1 pe-2 pt-1">
              <Nav.Link to="/" as={Link} active>
                Home
              </Nav.Link>
              <Nav.Link to="/services" as={Link}>
                Services
              </Nav.Link>
              <Nav.Link to="/doctors" as={Link}>
                Doctors
              </Nav.Link>
              <Nav.Link to="/news" as={Link}>
                News
              </Nav.Link>
              <Nav.Link to="/contact" as={Link}>
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              <Button
                to="/login"
                as={Link}
                variant="light"
                className="text-primary border-primary rounded-pill px-4"
              >
                Log in
              </Button>
              <Button to="/signup" as={Link} className="rounded-pill ">
                Sign up
              </Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
