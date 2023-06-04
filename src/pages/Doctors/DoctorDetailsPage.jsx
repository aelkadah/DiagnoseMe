import {
  faArrowLeft,
  faEllipsisVertical,
  faLocation,
  faLocationDot,
  faStar,
  faStarHalf,
  faStarHalfAlt,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DoctorDetailsPage = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex justify-content-start align-items-center gap-2 w-auto">
          <Link
            to={`/doctors`}
            className="bg-light d-flex align-items-center justify-content-center rounded-circle"
            style={{ height: "40px", width: "40px" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
          </Link>
          <h4 className="w-auto h-auto pt-2">Doctor Details</h4>
        </div>
        <span
          className="bg-light d-flex align-items-center justify-content-center rounded-circle"
          style={{ height: "40px", width: "40px" }}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} fixedWidth />
        </span>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={4} className="mb-3">
          <img
            alt=""
            src="https://avatars.githubusercontent.com/u/73890344?v=4"
          />
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex flex-column align-items-sm-center align-items-md-start"
        >
          <div className="w-100 d-flex flex-md-row flex-column mb-1 mb-md-0 justify-content-between align-items-center">
            <h3 className="mb-2">Dr. Ahmed ElKadah</h3>
            <Button className="px-3 rounded-5" disabled>
              Message
            </Button>
          </div>
          <div className="d-flex justify-content-start gap-3 w-auto ms-1">
            <h6 className="w-auto opacity-75 mt-0 py-0">Blood Diseases</h6>
            <div className="d-flex text-warning">
              <FontAwesomeIcon icon={faStar} fixedWidth />
              <FontAwesomeIcon icon={faStar} fixedWidth />
              <FontAwesomeIcon icon={faStar} fixedWidth />
              <FontAwesomeIcon icon={faStar} fixedWidth />
              <FontAwesomeIcon icon={faStarHalfStroke} fixedWidth />
            </div>
          </div>

          <h6 className="d-flex justify-content-start align-items-center text-danger">
            <FontAwesomeIcon icon={faLocationDot} fixedWidth />
            Mansoura, Salam
          </h6>

          <p className="text-secondary mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id
            ratione natus dolore cupiditate distinctio mollitia eveniet quidem
            pariatur ullam nostrum vero porro, itaque, earum temporibus culpa
            impedit at eum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Labore id ratione natus dolore cupiditate distinctio mollitia
            eveniet quidem pariatur ullam nostrum vero porro, itaque, earum
            temporibus culpa impedit at eum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore id ratione natus dolore
            cupiditate distinctio mollitia eveniet quidem pariatur ullam nostrum
            vero porro, itaque, earum temporibus culpa impedit at eum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Labore id ratione
            natus dolore cupiditate distinctio mollitia eveniet quidem pariatur
            ullam nostrum vero porro, itaque, earum temporibus culpa impedit at
            eum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id
            ratione natus dolore cupiditate distinctio mollitia eveniet quidem
            pariatur ullam nostrum vero porro, itaque, earum temporibus culpa
            impedit at eum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Labore id ratione natus dolore cupiditate distinctio mollitia
            eveniet quidem pariatur ullam nostrum vero porro, itaque, earum
            temporibus culpa impedit at eum.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDetailsPage;
