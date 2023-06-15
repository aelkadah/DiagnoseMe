import { faArrowLeft, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardHeader = ({ text, url }) => {
  return (
    <Row className="d-flex justify-content-between align-items-center mt-2  ">
      <h5 className="w-auto d-flex align-items-center gap-2 text-black-50">
        <Link
          to={url ? `${url}` : `/dashboard`}
          className="bg-light d-flex align-items-center justify-content-center rounded-circle mt-1"
          style={{ height: "40px", width: "40px" }}
        >
          <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        </Link>
        {text}
      </h5>
      <h6 className="w-auto d-flex align-items-center">
        <FontAwesomeIcon icon={faCalendarAlt} className="ms-0 me-1" />
        {new Date().toLocaleDateString()}
      </h6>
    </Row>
  );
};

export default DashboardHeader;
