import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import { Link } from "react-router-dom";
import Call from "../../components/utilities/Call";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const SignupPage = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <Container className="form-section">
      <button onClick={() => dispatch({ type: "inc" })}>click </button>
      <Call />
      <SecTitle title={"Signup"} />
      <Row>
        <Col xs={12} md={6} className="pb-4">
          <img src={loginpic} style={{ width: "100%" }} />
        </Col>
        <Col sm={12} lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter your name here..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder=" Enter your email here..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number </Form.Label>
              <Form.Control
                type="tel"
                placeholder=" Enter your number here..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter your password here..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Please confirm your password.."
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
