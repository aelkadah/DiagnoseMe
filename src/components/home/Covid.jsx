import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import covidImg from "../../images/covid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Covid = () => {
  return (
    <Container className="mt-5">
      <Row className="py-5">
        <Col
          xs={12}
          md={6}
          className="bg-primary d-flex align-items-center justify-content-center p-5"
        >
          <img src={covidImg} alt="" width="100%" />
        </Col>
        <Col
          xs={12}
          md={6}
          className="bg-light d-flex flex-column align-content-center justify-content-center p-4"
        >
          <h1
            className="text-primary text-center text-md-start"
            style={{ fontSize: "46px" }}
          >
            Coronavirus: All you need to know about COVID-19
          </h1>
          <br />
          <Row className="text-center text-md-start">
            <Link to="/news/1">
              Read more
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Covid;
