import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import DeleteConditionHook from "./../../redux/Hooks/Conditions/DeleteConditionHook";

const DashConditionCard = ({ condition }) => {
  const [handleDelete, loading] = DeleteConditionHook(condition);

  return (
    <Link onClick={handleDelete}>
      <Card className="bg-light border-0 text-black mb-4 deleteHover">
        <h4 className="fw-bold">{condition?.overview}</h4>
        <p className="fw-normal truncateTwo">{condition?.symptoms}</p>
        <p className="text-primary fw-normal mt-1 mb-2">Read more</p>
      </Card>
    </Link>
  );
};

export default DashConditionCard;
