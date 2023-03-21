import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <Container className="bg-light mt-4 border" fluid>
      <Container>
        <Row className="py-3">
          <img src={logo} alt="logo" height="80px" />
        </Row>
        <Row className="text-center border-top pt-3 pb-2">
          <h6 className="fw-normal">
            Copyright &copy; 2023 by
            <span className="text-primary fw-bold"> CS-15</span>. AllRights
            Reserved.
          </h6>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
