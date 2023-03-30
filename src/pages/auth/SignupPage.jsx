import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <Container className="form-section">
      <SecTitle title={"Signup"} />
      <Row>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={loginpic} style={{ width: "100%" }} />
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
              <Form.Label>phone number </Form.Label>
              <Form.Control
                type="tel"
                placeholder=" Enter your number here..."
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter your password here..."
                className=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Please confirm your password.."
                className=""
              />
            </Form.Group>
            <Button
              style={{ width: "100%", borderRadius: "10px" }}
              variant="primary"
              type="submit"
            >
              Sign up{" "}
            </Button>
          </Form>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <span>
              Already have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/login">
                Log in
              </Link>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
