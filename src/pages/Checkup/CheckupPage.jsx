import React, { useState } from "react";
import { SecTitle } from "../../components";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import digonse from "../../images/dignose.svg";
import man from "../../images/man.svg";
import women from "../../images/women.svg";
import { Link } from "react-router-dom";

const CheckupPage = () => {
  const [age, setage] = useState(0);
  const incage = () => {
    setage(age + 1);
  };
  const dicage = () => {
    if (age > 0) setage(age - 1);
  };

  return (
    <Container>
      <SecTitle title={"Checkup"} desc="Feel free to start your checkup" />

      <Row className="age-gender-section mt-5 align-items-center">
        <Col xs={12} md={5}>
          <img src={digonse} alt="" />
        </Col>
        <Col xs={12} md={7}>
          <div className="bg p-5">
            <h1>Hello</h1>
            <h2>lets get started</h2>

            <div className="age  mt-4">
              <span>Select Age</span>

              <div className="d-flex justify-content-evenly mt-2">
                <Button onClick={incage}>+</Button>
                <input value={age} type="text" onChange={(e) => {}} />
                <Button onClick={dicage}>-</Button>
              </div>
            </div>

            <div className="genders mt-4">
              <span>Select Gender</span>
              <div className="d-flex justify-content-evenly mt-2">
                <Button className="man-btn">
                  <img src={man} alt=".." />
                </Button>

                <Button className="women-btn">
                  <img src={women} alt="" />
                </Button>
              </div>
            </div>
          </div>
          <Row className="mt-3">
            <Col>
              <Button className="w-100 rounded-2" to="/checkup2" as={Link}>
                Continue
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckupPage;
