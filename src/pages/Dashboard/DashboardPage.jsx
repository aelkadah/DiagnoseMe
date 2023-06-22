import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCalendarCheck,
  faChevronRight,
  faClipboardList,
  faNewspaper,
  faNotesMedical,
  faPuzzlePiece,
  faUserDoctor,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DashboardHeader } from "./../../components";
import DoctorsHook from "./../../redux/Hooks/Doctor/DoctorsHook";
import ServicesHook from "./../../redux/Hooks/Services/ServicesHook";
import NewsHook from "./../../redux/Hooks/News/NewsHook";
import ConditionsHook from "../../redux/Hooks/Conditions/ConditionsHook";

const DashboardPage = () => {
  const [doctors, loading, pageCount, getPage, total] = DoctorsHook();
  const [services] = ServicesHook();
  const [news] = NewsHook();
  const [conditions] = ConditionsHook();

  const role = JSON.parse(localStorage.getItem("userInfo"))?.role;

  return (
    <Container>
      <DashboardHeader text="Dashboard" url="/" />

      {role ? (
        role == "1" ? (
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
                  <h2 className="my-0 fw-bold text-secondary">
                    {conditions ? conditions?.total : 0}
                  </h2>
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
        ) : role == "2" ? (
          <Row className="mt-4">
            <Col xs={12} md={6}>
              <Card
                as={Link}
                to="/dashboard/working-days"
                className="bg-light border-0 shadow-sm mb-4 d-flex flex-column align-items-center p-5 cursor-pointer an-card"
              >
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  fixedWidth
                  className="text-primary"
                  style={{ fontSize: "60px" }}
                />
                <Card.Body className="w-auto">
                  <h2 className="my-2 fw-bold text-secondary">Working Days</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card
                as={Link}
                to="/dashboard/schedule"
                className="bg-light border-0 shadow-sm mb-4 d-flex flex-column align-items-center p-5 cursor-pointer an-card"
              >
                <FontAwesomeIcon
                  icon={faClipboardList}
                  fixedWidth
                  className="text-primary"
                  style={{ fontSize: "60px" }}
                />
                <Card.Body className="w-auto">
                  <h2 className="my-2 fw-bold text-secondary">Schedule</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card
                as={Link}
                to="/checkup/alzheimer"
                className="bg-light border-0 shadow-sm mb-4 d-flex flex-column align-items-center p-5 cursor-pointer an-card"
              >
                <FontAwesomeIcon
                  icon={faBrain}
                  fixedWidth
                  className="text-primary"
                  style={{ fontSize: "60px" }}
                />
                <Card.Body className="w-auto">
                  <h2 className="text-center my-2 fw-bold text-secondary">
                    Al Zheimer MRI Analysis
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card
                as={Link}
                to="/checkup/diabetes"
                className="bg-light border-0 shadow-sm mb-4 d-flex flex-column align-items-center p-5 cursor-pointer an-card"
              >
                <FontAwesomeIcon
                  icon={faVial}
                  fixedWidth
                  className="text-primary"
                  style={{ fontSize: "60px" }}
                />
                <Card.Body className="w-auto">
                  <h2 className="text-center my-2 fw-bold text-secondary">
                    Diabetes Prediction
                  </h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : null
      ) : null}
    </Container>
  );
};

export default DashboardPage;
