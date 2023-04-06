import React from "react";
import { SecTitle } from "../components";
import {
  Container,
  Row,
  Col,
  Card,
  Pagination,
  Button,
  Form,
} from "react-bootstrap";
import shape from "./../images/shape.svg";
import { Link } from "react-router-dom";

const ThirdCheckupPage = () => {
  const diseases = [
    { question: "Do you have fever or high body temperature ?" },
    { question: "Do you have fever or high body temperature ?" },
    { question: "Do you have fever or high body temperature ?" },
    { question: "Do you have fever or high body temperature ?" },
    { question: "Do you have fever or high body temperature ?" },
    { question: "Do you have fever or high body temperature ?" },
  ];
  return (
    <Container>
      <SecTitle title={"Checkup"} desc="Feel free to start your checkup" />

      <Row className="diseases-section mt-5 align-items-center">
        <Col lg={5}>
          <img src={shape} alt="" />
        </Col>

        <Col lg={6}>
          <span>How severe is your pain ?</span>
          <Form.Label>Range</Form.Label>
          <Form.Range />
          <div style={{ textAlign: "start" }} className="bg p-5 ">
            <h1 style={{ textAlign: "center" }}>
              Please answer the following questions{" "}
            </h1>

            {diseases.map((item) => {
              return (
                <div
                  className=" justify-content-between mt-4 p-2"
                  style={{ borderBottom: "1px solid #0000001A" }}
                >
                  <span>{item.question}</span>
                  <div className="d-flex">
                    {" "}
                    <Form.Check name="group1" type="radio" />
                    <span style={{ marginLeft: "8px" }}>yes</span>
                  </div>
                  <div className="d-flex">
                    <Form.Check name="group1" type="radio" />{" "}
                    <span style={{ marginLeft: "8px" }}>no</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-flex two-btns">
            <Link to="/SecondCheckupPgae" className="mt-4 ">
              {" "}
              back
            </Link>
            <Link to="/FourthCheckupPage" className="mt-4 ">
              {" "}
              Continue
            </Link>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdCheckupPage;
