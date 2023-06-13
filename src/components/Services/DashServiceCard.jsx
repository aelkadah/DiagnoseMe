import React from "react";
import { Link } from "react-router-dom";
import DeleteServiceHook from "../../redux/Hooks/Services/DeleteServiceHook";

const DashServiceCard = ({ service }) => {
  const [handleDelete] = DeleteServiceHook(service);

  return (
    <Link onClick={handleDelete}>
      <div className="bg-white rounded py-4 px-2 text-center d-flex flex-column align-items-center gap-2 deleteHover">
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          style={{ width: "100px", height: "100px" }}
        >
          <img src={`http://127.0.0.1:8000/storage/${service?.image}`} />
        </div>
        <h4 className="text-noto text-secondary fw-bold mb-1">
          {service?.name}
        </h4>
        <p>{service?.description}</p>
      </div>
    </Link>
  );
};

export default DashServiceCard;
