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
  ProgressBar,
} from "react-bootstrap";
import shape from "./../images/shape.svg";
import { Link } from "react-router-dom";

const FourthCheckupPage = () => {
  const diseases = [
    {
      question:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      question:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];
  return (
    <Container>
      <SecTitle title={"Checkup"} desc="Feel free to start your checkup" />

      <Row className="diseases-section mt-5 align-items-center">
        <Col lg={5}>
          <img src={shape} alt="" />
        </Col>

        <Col lg={6}>
          <span>
            Your symptoms may require medical evaluation . Schedule an
            appointment with your doctor . If your symptoms get worse , see a
            doctor immediately.
          </span>

          <div style={{ textAlign: "start" }} className="bg p-5 mt-4 ">
            <h1>Recommended Analysis</h1>
            <span>Cumulative glucose analysis</span>

            <h2
              className="p-2"
              style={{
                borderBottom: "1px solid  #0000001A",
                borderTop: "1px solid  #0000001A",
              }}
            >
              Possible Conditions
            </h2>
            {diseases.map((item) => {
              return (
                <div
                  className=" justify-content-between mt-4 p-2"
                  style={{ borderBottom: "1px solid #0000001A" }}
                >
                  <ProgressBar now={50} />
                  <h1 className="mt-2" style={{ fontSize: "20px" }}>
                    Diabetes type 1
                  </h1>
                  <p className="mt-2">{item.question}</p>
                  <div style={{ textAlign: "end" }}>
                    <a href="#">show details</a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <Button
              className="p-3 "
              style={{ width: "100%", borderRadius: "10px" }}
            >
              Done
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthCheckupPage;
