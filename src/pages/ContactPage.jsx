import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../components";
import contact from "/src/images/contactus.svg";

const ContactPage = () => {
  return (
    <Container>
      <SecTitle title="Contact" desc="Contact us for support 24/7" />

      <Row>
        <Col xs={12} md={6}>
          <img src={contact} style={{ width: "100%" }} />
        </Col>
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
