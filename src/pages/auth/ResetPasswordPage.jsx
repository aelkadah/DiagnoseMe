import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  return (
    <Container>
      <SecTitle title={"Reset password"} />
      <Row>
        <Col xs={12} md={6}>
          <img src={loginpic} style={{ width: "100%" }} />
        </Col>
        <Col sm={12} lg={6} style={{ marginTop: "80px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email here..."
              />
            </Form.Group>

            <Button
              style={{ width: "100%", borderRadius: "10px" }}
              variant="primary"
              type="submit"
            >
              Send Code
            </Button>
          </Form>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <span>
              Back to{" "}
              <Link style={{ textDecoration: "none" }} to="/login">
                Log in
              </Link>{" "}
              Page
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordPage;
