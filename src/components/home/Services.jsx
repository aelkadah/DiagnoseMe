import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SecTitle } from "../../components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <Container className="bg-light py-4">
      <Row className="bg-light">
        <SecTitle title="Services" desc="What we provide?" />
        <Row>
          <Col xs={6} md={3}>
            <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2">
              <div
                className="border rounded rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px" }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <h4 className="text-noto text-secondary">Health test</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2">
              <div
                className="border rounded rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px" }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <h4 className="text-noto text-secondary">Health test</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2">
              <div
                className="border rounded rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px" }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <h4 className="text-noto text-secondary">Health test</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2">
              <div
                className="border rounded rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "35px", height: "35px" }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <h4 className="text-noto text-secondary">Health test</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="text-center mt-4">
        <Link to="" className="text-noto fw-bold">
          All Services
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Row>
    </Container>
  );
};

export default Services;
