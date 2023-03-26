import React from "react";
import { Container, Row } from "react-bootstrap";
import { SecTitle } from "../components";

const HomePage = () => {
  return (
    <Container>
      <SecTitle title={"Services"} desc={"What we provide?"} />
      <Row className="bg-light">
        <div>HomePage</div>
      </Row>
    </Container>
  );
};

export default HomePage;
