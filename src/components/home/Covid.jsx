import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import covidImg from "../../images/covid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Covid = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col
          xs={12}
          md={6}
          className="bg-primary d-flex align-items-center justify-content-center p-4"
        >
          <img src={covidImg} alt="" width="80%" />
        </Col>
        <Col
          xs={12}
          md={6}
          className="bg-light d-flex flex-column align-content-center justify-content-center p-4"
        >
          <h1 className="text-primary" style={{ fontSize: "46px" }}>
            Coronavirus: All you need to know about COVID-19
          </h1>
          <br />
          <Link to="">
            Read more
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Covid;
