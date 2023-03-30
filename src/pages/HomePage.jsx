import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Covid from "../components/home/Covid";
import landing from "../images/landing.svg";

const HomePage = () => {
  return (
    <Container>
      <Row
        className="flex-row-reverse"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <Col
          xs={12}
          md={6}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <img src={landing} alt="" width="80%" />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div>
            <h1
              className="text-noto fw-bold text-secondary"
              style={{ fontSize: "60px" }}
            >
              The Best Reliable Health Service In Your Hands
            </h1>
            <p className="py-2 w-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              temporibus odit natus at eum cupiditate. Deleniti doloribus beatae
              rem, ullam porro perspiciatis consequatur dicta neque itaque a
              fugit dolorum ex.
            </p>
            <Button className="rounded-pill py-3">Start Checkup</Button>
          </div>
        </Col>
      </Row>

      <Covid />
    </Container>
  );
};

export default HomePage;
