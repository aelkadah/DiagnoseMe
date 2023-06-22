import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Card } from "react-bootstrap";

const DoctorCard = ({ doctor }) => {
  return (
    // <Link to={`/doctors/${doctor?.id}`}>
    <Card className="d-flex flex-row mb-4" style={{ maxWidth: "min-content" }}>
      <Col xs={12} md={4}>
        <Card.Img
          variant="top"
          src={`http://127.0.0.1:8000/storage/${doctor.image}`}
        />
      </Col>
      <Card.Body>
        <Card.Title className="fs-4">
          Dr. {doctor?.first_name} {doctor?.last_name}
        </Card.Title>
        <h6 className="text-secondary">{doctor?.specialization}</h6>
        <h6 className="text-secondary">
          <FontAwesomeIcon icon={faLocationDot} className="ms-0 me-1" />
          {doctor?.address}
        </h6>
        {/* <h6 className="text-secondary">
            <FontAwesomeIcon icon={faPhone} className="ms-0 me-1" />
            {doctor?.phone_number}
          </h6> */}
        <Card.Text>{doctor?.info}</Card.Text>
      </Card.Body>
    </Card>
    // </Link>
  );
};

export default DoctorCard;
