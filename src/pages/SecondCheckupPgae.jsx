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

const SecondCheckupPgae = () => {
  const diseases = [
    { name: "dis1" },
    { name: "dis1" },
    { name: "dis1" },
    { name: "dis1" },
    { name: "dis1" },
    { name: "dis1" },
  ];
  return (
    <Container>
      <SecTitle title={"Checkup"} desc="Feel free to start your checkup" />

      <Row className="diseases-section mt-5 align-items-center">
        <Col lg={5}>
          <img src={shape} alt="" />
        </Col>

        <Col lg={6}>
          <div className="bg p-5">
            <h1>Please check all symptoms you feel</h1>

            {diseases.map((item) => {
              return (
                <div
                  className="d-flex justify-content-between mt-4 p-2"
                  style={{ borderBottom: "1px solid #0000001A" }}
                >
                  <span>{item.name}</span> <Form.Check />
                </div>
              );
            })}
          </div>

          <div className="d-flex two-btns">
            <Link to="/FirstCheckupPgae" className="mt-4 ">
              {" "}
              back
            </Link>
            <Link to="/ThirdCheckupPage" className="mt-4 ">
              {" "}
              Continue
            </Link>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondCheckupPgae;
