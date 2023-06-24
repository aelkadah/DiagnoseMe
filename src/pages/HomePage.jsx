import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Covid from "../components/home/Covid";
import landing from "../images/landing.svg";
import { FeaturedDoctors, Services } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Accordion from "react-bootstrap/Accordion";
import question from "../images/qustion.svg";
import Return from "./../components/utilities/Return";
import Call from "../components/utilities/Call";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (localStorage.getItem("required")) setShow(true);
  }, []);

  return (
    <Container>
      <Return />
      <Call />

      <Row
        className="flex-row-reverse"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <Col
          xs={12}
          md={5}
          lg={6}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <img src={landing} alt="" width="80%" />
        </Col>
        <Col
          xs={12}
          md={7}
          lg={6}
          className="d-flex align-items-center mt-3 mt-md-0"
        >
          <Row>
            <h1
              className="text-noto fw-bold text-secondary text-center text-md-start"
              style={{ fontSize: "60px" }}
            >
              The Best Reliable Health Service In Your Hands
            </h1>
            <p className="py-2 w-100 w-md-75  text-center text-md-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              temporibus odit natus at eum cupiditate. Deleniti doloribus beatae
              rem, ullam porro perspiciatis consequatur dicta neque itaque a
              fugit dolorum ex. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eos temporibus odit natus at eum cupiditate.
              Deleniti doloribus beatae rem, ullam porro perspiciatis
              consequatur dicta neque itaque a fugit dolorum ex.
            </p>
            <Row className="d-flex justify-content-center justify-content-md-start">
              <Button className="rounded-pill py-3 w-auto ">
                Start Checkup
              </Button>
            </Row>
          </Row>
        </Col>
      </Row>

      <Covid />

      <Services />

      <FeaturedDoctors />

      {/* Accordingggg */}
      <div className="according-home mt-5">
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12}>
            <h1>Frequently Asked Questions</h1>
            <h2>We Got You The Answers</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I start checkup without registration?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can start your checkup easily without registration
                  from any device at any time
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can I start checkup without registration?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can start your checkup easily without registration
                  from any device at any time
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I start checkup without registration?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can start your checkup easily without registration
                  from any device at any time
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col lg={6} md={12}>
            <img src={question} alt="" />
          </Col>
        </Row>
      </div>

      {/* Newsssssss */}
      {/* 
      <div className="new">
        <SecTitle title={"News"} desc="See our latest trending news" />
        <Row>
          <Col lg={4}>
            <Cards />
          </Col>
          <Col lg={4}>
            <Cards />
          </Col>
          <Col lg={4}>
            <Cards />
          </Col>
          <div className="text-center show-all-doctors-div">
            <Button> More News </Button>
          </div>
        </Row>
      </div> */}

      {/* last section */}
      <div className="last-sec mt-5">
        <Row className="mt-5 align-items-center">
          <Col lg={4}>
            <h1>Let’s get started</h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries{" "}
            </p>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Card>
                  <span className="text-center">STARTUP</span>
                  <h2>free</h2>
                  <div className="d-flex ">
                    <span>x</span>

                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="text-center show-all-doctors-div">
                    {" "}
                    <Button>
                      {" "}
                      <Link
                        to={"/login"}
                        className=""
                        style={{ color: "white" }}
                      >
                        get free
                      </Link>{" "}
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Card>
                  <span className="text-center">PREMIUM</span>
                  <h2>50 egp</h2>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="d-flex ">
                    <span>x</span>
                    <span>Unlimited doctor meetings</span>
                  </div>
                  <div className="text-center show-all-doctors-div">
                    {" "}
                    <Button>
                      {" "}
                      <Link
                        to={"/Payment"}
                        className=""
                        style={{ color: "white" }}
                      >
                        get PREMIUM
                      </Link>{" "}
                    </Button>
                  </div>
                </Card>
              </Col>{" "}
            </Row>
          </Col>
        </Row>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Something missing</Modal.Title>
        </Modal.Header>
        {localStorage.getItem("required") == "diabetes" ? (
          <Modal.Body className="p-3">
            You missed something... Check your Diabetes A1C Analysis now for
            free.
          </Modal.Body>
        ) : null}
        {localStorage.getItem("required") == "alzheimer" ? (
          <Modal.Body className="p-3">
            You missed something... Check your MRI now for free.
          </Modal.Body>
        ) : null}

        <Modal.Footer>
          <Button
            variant="light"
            className="border border-opacity-50"
            onClick={handleClose}
          >
            Close
          </Button>
          {localStorage.getItem("required") == "diabetes" ? (
            <Button to="/checkup/diabetes" as={Link}>
              Check now
            </Button>
          ) : null}
          {localStorage.getItem("required") == "alzheimer" ? (
            <Button to="/checkup/alzheimer" as={Link}>
              Check now
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HomePage;
