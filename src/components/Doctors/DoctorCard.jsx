import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Card, Row } from "react-bootstrap";

const DoctorCard = ({ doctor }) => {
  return (
    <Link to={`/doctors/${doctor?.id}`}>
      <Card className="mb-3" style={{ maxWidth: "540px" }}>
        <Row className=" g-0 align-items-center">
          <Col md={4}>
            <img
              src={`http://127.0.0.1:8000/storage/${doctor.image}`}
              className="img-fluid rounded-start"
              alt={`${doctor?.first_name} Image`}
            />
          </Col>
          <Col md={8}>
            <Card.Body className="card-body">
              <h4 className="card-name mb-1">
                Dr. {doctor?.first_name} {doctor?.last_name}
              </h4>
              <h6 className="text-secondary">{doctor?.specialization}</h6>
              <p className="text-secondary truncate-two text-secondary my-2">
                {doctor?.info}
              </p>
              <h6 className="text-secondary">
                <FontAwesomeIcon icon={faLocationDot} className="ms-0 me-1" />
                {doctor?.address}
              </h6>
              <h6 className="text-secondary">
                <FontAwesomeIcon icon={faPhone} className="ms-0 me-1" />
                {doctor?.phone_number}
              </h6>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};

export default DoctorCard;
