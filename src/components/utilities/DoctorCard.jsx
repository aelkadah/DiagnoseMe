import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    // <Col sm={12} md={6} lg={6}>
    <Link to={`/doctors/:id`}>
      <div className="card mb-3 card-doctors" style={{ maxwidth: "540px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              //   src={doctorImg}
              src="https://avatars.githubusercontent.com/u/73890344?v=4"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-name">
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  Name:
                </span>
                {doctor.name}
              </h5>
              <p className="card-text">
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  address:
                </span>
                {doctor.address}
              </p>
              <p className="card-text">
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  info:
                </span>
                {doctor.info}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                  >
                    PhoneNumber:
                  </span>
                  {doctor.PhoneNumber}
                </small>
              </p>
              <a href="#">
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  id:
                </span>
                {doctor.id}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
    // </Col>
  );
};

export default DoctorCard;
