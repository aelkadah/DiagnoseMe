import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import DeleteDoctorHook from "../../redux/Hooks/Doctor/DeleteDoctorHook";

const DashDoctorCard = ({ doctor }) => {
  const [handleDelete] = DeleteDoctorHook(doctor);

  return (
    <Link onClick={handleDelete}>
      <div className="card mb-3 deleteHover" style={{ maxwidth: "540px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src={`http://127.0.0.1:8000/storage/${doctor.image}`}
              className="img-fluid rounded-start"
              alt={`${doctor?.first_name} Image`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashDoctorCard;
