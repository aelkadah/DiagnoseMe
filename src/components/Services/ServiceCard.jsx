import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2">
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{ width: "100px", height: "100px" }}
      >
        <img src={`http://127.0.0.1:8000/storage/${service?.image}`} />
      </div>
      <h4 className="text-noto text-secondary fw-bold mb-1">{service?.name}</h4>
      <p>{service?.description}</p>
    </div>
  );
};

export default ServiceCard;
