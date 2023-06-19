import React from "react";
import { Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConditionCard = ({ condition }) => {
  const symptoms = condition?.symptoms?.split(",");

  return (
    <Link to={`/conditions/${condition?.id}`}>
      <Row className="mt-5">
        <Card className="newsCard">
          <Card.Body>
            <Card.Text className="fs-4 fw-bold mt-1 mb-2">
              {condition?.overview}
            </Card.Text>
            <Card.Text className="fw-normal">
              <h6 className="w-auto text-secondary">
                Symptoms:
                <ul className="text-black fw-normal ">
                  {symptoms
                    ?.map((sym, index) => (
                      <li className="truncateOne" key={index}>
                        {sym}
                      </li>
                    ))
                    .slice(0, 3)}
                </ul>
              </h6>
            </Card.Text>
            <p className="text-primary fw-normal mt-2 mb-1">Read more</p>
          </Card.Body>
        </Card>
      </Row>
    </Link>
  );
};

export default ConditionCard;
