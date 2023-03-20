import React from "react";
import { Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row className="bg-light">
        <h1 className="text-primary">Header</h1>
      </Row>
    </Container>
  );
};

export default Header;
