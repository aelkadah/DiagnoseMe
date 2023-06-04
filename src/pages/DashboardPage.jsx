import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../components/utilities/SecTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHeartCircleBolt,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const DashboardPage = () => {
  return (
    <Container>
      {/* <SecTitle title="Dashboard" /> */}
      <Row className="d-flex justify-content-between align-items-center">
        <h5 className="w-auto">Dashboard</h5>
        <h6 className="w-auto d-flex align-items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="ms-0 me-1" />
          04/06/2023
        </h6>
      </Row>
    </Container>
  );
};

export default DashboardPage;
