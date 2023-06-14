import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Button,
  Dropdown,
} from "react-bootstrap";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faSliders,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import LogoutHook from "./../../redux/Hooks/Auth/LogoutHook";

const Header = () => {
  const [handleLogout] = LogoutHook();

  return (
    <Navbar className="shadow-sm mb-3 py-1" expand="md">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
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
              as={NavLink}
            >
              <img src={logo} alt="logo" height="50px" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 gap-1 pe-2 pt-1">
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/services" as={NavLink}>
                Services
              </Nav.Link>
              <Nav.Link to="/doctors" as={NavLink}>
                Doctors
              </Nav.Link>
              <Nav.Link to="/conditions" as={NavLink}>
                Conditions
              </Nav.Link>
              <Nav.Link to="/news" as={NavLink}>
                News
              </Nav.Link>
              <Nav.Link to="/contact" as={NavLink}>
                Contact
              </Nav.Link>
            </Nav>

            <div className="d-flex gap-2">
              {!localStorage.getItem("userInfo") ? (
                <>
                  <Button
                    to="/login"
                    as={NavLink}
                    variant="light"
                    className="text-primary border-primary rounded-pill px-4"
                  >
                    Log in
                  </Button>
                  <Button to="/signup" as={NavLink} className="rounded-pill ">
                    Sign up
                  </Button>
                </>
              ) : (
                <>
                  <Button to="/checkup" as={NavLink} className="rounded-pill ">
                    Checkup
                  </Button>

                  <Dropdown>
                    <Dropdown.Toggle className="py-2 px-3 bg-white text-primary border-0 d-flex align-items-center h-100">
                      Hi!{" "}
                      {JSON.parse(localStorage.getItem("userInfo")).first_name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {JSON.parse(localStorage.getItem("userInfo")).role ==
                      1 ? (
                        <Dropdown.Item as={NavLink} to="/dashboard">
                          <FontAwesomeIcon
                            icon={faSliders}
                            className="ps-0 pe-2"
                          />
                          Dashboard
                        </Dropdown.Item>
                      ) : null}

                      <Dropdown.Item as={NavLink} to="/profile">
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          className="ps-0 pe-2"
                        />
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item onClick={handleLogout}>
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="ps-0 pe-2"
                        />
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
