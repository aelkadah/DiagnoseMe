import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const DoctorCard = ({ doctor }) => {
  return (
    // <Col sm={12} md={6} lg={6}>
    <Link to={`/doctors/${doctor?.id}`}>
      <div className="card mb-3 card-doctors" style={{ maxwidth: "540px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              // src="https://avatars.githubusercontent.com/u/73890344?v=4"
              src={`http://127.0.0.1:8000/storage/app/public/doctors/${doctor.image}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-name mb-1">Dr. {doctor.name}</h4>
              <h6 className="text-secondary">{doctor.Specialization}</h6>
              <p className="text-secondary truncate-two text-secondary my-2">
                {doctor.info}
              </p>
              <h6 className="text-secondary">
                <FontAwesomeIcon icon={faLocationDot} className="ms-0 me-1" />
                {doctor.address}
              </h6>
              <h6 className="text-secondary">
                <FontAwesomeIcon icon={faPhone} className="ms-0 me-1" />
                {doctor.PhoneNumber}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
    // </Col>
  );
};

export default DoctorCard;
