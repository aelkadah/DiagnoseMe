import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { DashboardHeader } from "./../../components";
import ConditionDetailsHook from "./../../redux/Hooks/Conditions/ConditionDetailsHook";
import image from "../../images/condition.jpg";

const ConditionDetailsPage = () => {
  const { id } = useParams();
  const [condition, loading] = ConditionDetailsHook(id);

  if (condition) console.log(condition);

  const data = "asf, asasdf, asdg, fsdvjnmlaskc, ksdlv, sDLVzdsf";

  return (
    <Container>
      <DashboardHeader
        text={`Conditions / ${condition?.overview}`}
        url="/conditions"
      />
      <Row className="mt-3">
        <h1 className="text-noto fw-bold border-bottom border-opacity-50 pb-3">
          {condition?.overview}
        </h1>
      </Row>
      <Row>
        <img src={image} alt=".." />
      </Row>
      <Row className="mt-3">
        <h4 className="fw-bold">Symptoms:</h4>
        <ul style={{ listStyle: "auto" }} className="ps-5">
          <Row>
            {data.split(", ").map((item, index) => (
              <Col xs={12} md={6} key={index}>
                <li style={{ lineHeight: "1.4" }}>{item}</li>
              </Col>
            ))}
          </Row>
        </ul>
      </Row>
      <Row className="mt-1">
        <h4 className="fw-bold">Prognosis:</h4>
        <ul style={{ listStyle: "auto" }} className="ps-5">
          <Row>
            {data.split(", ").map((item, index) => (
              <Col xs={12} md={6} key={index}>
                <li style={{ lineHeight: "1.4" }}>{item}</li>
              </Col>
            ))}
          </Row>
        </ul>
      </Row>
      <Row className="mt-1">
        <h4 className="fw-bold">Diagnosis:</h4>
        <ul style={{ listStyle: "auto" }} className="ps-5">
          <Row>
            {data.split(", ").map((item, index) => (
              <Col xs={12} md={6} key={index}>
                <li style={{ lineHeight: "1.4" }}>{item}</li>
              </Col>
            ))}
          </Row>
        </ul>
      </Row>
      <Row className="mt-1">
        <h4 className="fw-bold">Risks:</h4>
        <ul style={{ listStyle: "auto" }} className="ps-5">
          <Row>
            {data.split(", ").map((item, index) => (
              <Col xs={12} md={6} key={index}>
                <li style={{ lineHeight: "1.4" }}>{item}</li>
              </Col>
            ))}
          </Row>
        </ul>
      </Row>
      <Row className="mt-1">
        <h4 className="fw-bold">Treatment:</h4>
        <ul style={{ listStyle: "auto" }} className="ps-5">
          <Row>
            {data.split(", ").map((item, index) => (
              <Col xs={12} md={6} key={index}>
                <li style={{ lineHeight: "1.4" }}>{item}</li>
              </Col>
            ))}
          </Row>
        </ul>
      </Row>
    </Container>
  );
};

export default ConditionDetailsPage;
