import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import RegisterHook from "../../redux/Hooks/Auth/RegisterHook";
import { ToastContainer } from "react-toastify";

const SignupPage = () => {
  const [
    firstname,
    lastname,
    userName,
    email,
    phone,
    password,
    confirmPassword,
    onChangefirstName,
    onChangelastName,
    onChangeuserName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();

  return (
    <Container className="form-section">
      <SecTitle title={"Signup"} />
      <Row>
        <Col xs={12} md={6} className="pb-4">
          <img src={loginpic} style={{ width: "100%" }} />
        </Col>
        <Col sm={12} lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>first Name </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter your name here..."
                onChange={onChangefirstName}
                value={firstname}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>last Name </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter your name here..."
                onChange={onChangelastName}
                value={lastname}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>user Name </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter your name here..."
                onChange={onChangeuserName}
                value={userName}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder=" Enter your email here..."
                onChange={onChangeEmail}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone number </Form.Label>
              <Form.Control
                type="tel"
                placeholder=" Enter your number here..."
                onChange={onChangePhone}
                value={phone}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter your password here..."
                onChange={onChangePassword}
                value={password}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="password"
                placeholder=" Please confirm your password.."
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
              />
            </Form.Group>
            <Button
              style={{ width: "100%", borderRadius: "10px" }}
              variant="primary"
              onClick={OnSubmit}
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

      <ToastContainer />
    </Container>
  );
};

export default SignupPage;
