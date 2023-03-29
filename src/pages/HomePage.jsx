import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SecTitle } from "../components";

const HomePage = () => {
  return (
    <Container>
      <Row className="bg-light" style={{ minHeight: "calc(100vh - 100px)" }}>
        <Col xs={12} md={6}>
          <h1>Ahmeeeeeeeeeeeeeeeeeed</h1>
          <h1
            className="text-noto fw-bold text-secondary"
            style={{ fontSize: "60px" }}
          >
            The Best Reliable Health Service In Your Hands
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            temporibus odit natus at eum cupiditate. Deleniti doloribus beatae
            rem, ullam porro perspiciatis consequatur dicta neque itaque a fugit
            dolorum ex.
          </p>
          <Button className="rounded-pill py-3">Start Checkup</Button>
        </Col>
        <Col xs={12} md={6}>
          <h5 className="text-noto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            temporibus odit natus at eum cupiditate. Deleniti doloribus beatae
            rem, ullam porro perspiciatis consequatur dicta neque itaque a fugit
            dolorum ex.
          </h5>
        </Col>
      </Row>
      <SecTitle title={"Services"} desc={"What we provide?"} />
      <Row className="bg-light">
        <div>HomePage</div>
      </Row>
    </Container>
  );
};

export default HomePage;
