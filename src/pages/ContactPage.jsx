import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../components";
import contact from "/src/images/contactus.svg";

const ContactPage = () => {
  return (
    <Container className="form-section">
      <SecTitle title={"Contact "} />
      <div style={{ textAlign: "center" }}>
        {" "}
        <span className="second-tittle"> Contact us for support 24/7 </span>
      </div>
      <Row>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={contact} style={{ width: "100%" }} />
        </div>
        <Col sm={12} lg={6} style={{ marginTop: "80px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter your name here..."
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder=" Enter your email here..."
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>message </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type your message here..."
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Form>
          <Button
            style={{ width: "100%", borderRadius: "10px" }}
            variant="primary"
            type="submit"
          >
            send message{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
