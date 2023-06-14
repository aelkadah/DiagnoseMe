import React from "react";
import { Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConditionCard = ({ condition }) => {
  return (
    <Link to={`/conditions/${condition?.id}`}>
      <Row className="mt-5">
        <Card className="newsCard">
          <div className="backgroundImg">
            <img src={`http://127.0.0.1:8000/storage/${condition?.image}`} />
          </div>
          <Card.Body>
            <Card.Text className="mb-1 fs-5 fw-bold">
              {condition?.title}
            </Card.Text>
            <Card.Text className="mb-2 truncate-two">
              {condition?.description}
            </Card.Text>
            <p className="text-primary fw-normal my-1">Read more</p>
          </Card.Body>
        </Card>
      </Row>
    </Link>
  );
};

export default ConditionCard;
