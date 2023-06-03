import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Covid from "../components/home/Covid";
import landing from "../images/landing.svg";
import { FeaturedDoctors, Services } from "../components";
import { SecTitle } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import doctor from "/src/images/doctor.svg";
import {
  faRightLong,
  faArrowLeftRotate,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import question from "../images/qustion.svg";
import Cards from "../components/utilities/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Return from "./../components/utilities/Return";
import Call from "../components/utilities/Call";

const HomePage = () => {
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
          md={6}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <img src={landing} alt="" width="80%" />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div>
            <h1
              className="text-noto fw-bold text-secondary"
              style={{ fontSize: "60px" }}
            >
              The Best Reliable Health Service In Your Hands
            </h1>
            <p className="py-2 w-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              temporibus odit natus at eum cupiditate. Deleniti doloribus beatae
              rem, ullam porro perspiciatis consequatur dicta neque itaque a
              fugit dolorum ex.
            </p>
            <Button className="rounded-pill py-3">Start Checkup</Button>
          </div>
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
      </div>

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
                    <Button> GET FREE </Button>
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
                    <Button> GET PREMIUM </Button>
                  </div>
                </Card>
              </Col>{" "}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
