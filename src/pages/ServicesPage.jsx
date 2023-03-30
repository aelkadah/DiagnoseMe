import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../components";
import person from "/src/images/person.svg";
const ServicesPage = () => {
  const dataa = [
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      tittle: "health test",
      paragrapgh:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];
  return (
    <Container className="form-section">
      <SecTitle title={"Services "} />
      <div style={{ textAlign: "center" }}>
        {" "}
        <span className="second-tittle">What we provide ? </span>
      </div>
      <Row className="mt-5" style={{ textAlign: "center" }}>
        {dataa.map((item) => {
          return (
            <Col sm={3}>
              <div className="card">
                <img src={person} />
                <h1> {item.tittle} </h1>
                <p>{item.paragrapgh}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ServicesPage;
