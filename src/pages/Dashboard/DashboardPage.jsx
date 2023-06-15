import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronRight,
  faNewspaper,
  faNotesMedical,
  faPuzzlePiece,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DoctorsHook from "./../../redux/Hooks/Doctor/DoctorsHook";
import ServicesHook from "./../../redux/Hooks/Services/ServicesHook";
import NewsHook from "./../../redux/Hooks/News/NewsHook";

const DashboardPage = () => {
  const [doctors, loading, pageCount, getPage, total] = DoctorsHook();
  const [services] = ServicesHook();
  const [news] = NewsHook();

  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center mt-2  ">
        <h5 className="w-auto">Dashboard</h5>
        <h6 className="w-auto d-flex align-items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="ms-0 me-1" />
          04/06/2023
        </h6>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <Card
            as={Link}
            to="/dashboard/services"
            className="bg-light border-0 shadow-sm mb-4 d-flex flex-row align-items-center px-5 cursor-pointer an-card"
          >
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              fixedWidth
              className="text-primary"
              style={{ fontSize: "60px" }}
            />
            <Card.Body className="w-auto">
              <h2 className="my-0 fw-bold text-secondary">
                {services ? services?.total : 0}
              </h2>
              <h6 className="my-0 text-black-50">Services</h6>
            </Card.Body>
            <Card.Body className="d-flex flex-row-reverse h-100">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card
            as={Link}
            to="/dashboard/doctors"
            className="bg-light border-0 shadow-sm mb-4 d-flex flex-row align-items-center px-5 cursor-pointer an-card"
          >
            <FontAwesomeIcon
              icon={faUserDoctor}
              fixedWidth
              className="text-primary"
              style={{ fontSize: "60px" }}
            />
            <Card.Body className="w-auto">
              <h2 className="my-0 fw-bold text-secondary">
                {total ? total : 0}
              </h2>
              <h6 className="my-0 text-black-50">Doctors</h6>
            </Card.Body>
            <Card.Body className="d-flex flex-row-reverse h-100">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card
            as={Link}
            to="/dashboard/conditions"
            className="bg-light border-0 shadow-sm mb-4 d-flex flex-row align-items-center px-5 cursor-pointer an-card"
          >
            <FontAwesomeIcon
              icon={faNotesMedical}
              fixedWidth
              className="text-primary"
              style={{ fontSize: "60px" }}
            />
            <Card.Body className="w-auto">
              <h2 className="my-0 fw-bold text-secondary">54</h2>
              <h6 className="my-0 text-black-50">Conditions</h6>
            </Card.Body>
            <Card.Body className="d-flex flex-row-reverse h-100">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card
            as={Link}
            to="/dashboard/news"
            className="bg-light border-0 shadow-sm mb-4 d-flex flex-row align-items-center px-5 cursor-pointer an-card"
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              fixedWidth
              className="text-primary"
              style={{ fontSize: "60px" }}
            />
            <Card.Body className="w-auto">
              <h2 className="my-0 fw-bold text-secondary">
                {news ? news?.total : 0}
              </h2>
              <h6 className="my-0 text-black-50">News</h6>
            </Card.Body>
            <Card.Body className="d-flex flex-row-reverse h-100">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
