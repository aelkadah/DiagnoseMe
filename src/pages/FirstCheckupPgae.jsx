import React, { useState } from "react";
import { SecTitle } from "../components";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import digonse from "./../images/dignose.svg";
import man from "./../images/man.svg";
import women from "./../images/women.svg";

const FirstCheckupPgae = () => {
  const [age, setage] = useState(0);

  const incage = () => {
    setage(age + 1);
  };

  const dicage = () => {
    if (age > 0) {
      setage(age - 1);
    }
  };

  return (
    <Container>
      <SecTitle title={"Checkup"} desc="Feel free to start your checkup" />

      <Row className="age-gender-section mt-5">
        <Col lg={6}>
          <img src={digonse} alt="" />
        </Col>
        <Col lg={6}>
          <div className="bg p-5">
            <h1>hello</h1>
            <h2>lets get started</h2>

            <div className="age  mt-4">
              <span>select your age</span>

              <div className="d-flex justify-content-evenly mt-2">
                <Button onClick={incage}>+</Button>
                <input value={age} type="text" />
                <Button onClick={dicage}>-</Button>
              </div>
            </div>

            <div className="genders mt-4">
              <span>Select your gender</span>
              <div className="d-flex justify-content-evenly mt-2">
                <Button className="man-btn">
                  {" "}
                  <img src={man} alt="" />
                </Button>

                <Button className="women-btn">
                  <img src={women} alt="" />
                </Button>
              </div>
            </div>
          </div>
          <Button className="mt-4 continue"> Continue </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstCheckupPgae;
