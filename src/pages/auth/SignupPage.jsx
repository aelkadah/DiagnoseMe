import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import RegisterHook from "../../redux/Hooks/Auth/RegisterHook";

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
      <Row className="mt-3">
        <Col xs={12} md={5} className="pb-4">
          <img src={loginpic} style={{ width: "100%" }} />
        </Col>
        <Col sm={12} lg={7}>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name..."
                    onChange={onChangefirstName}
                    value={firstname}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your lasts name..."
                    onChange={onChangelastName}
                    value={lastname}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username..."
                    onChange={onChangeuserName}
                    value={userName}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone number </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder=" Enter your number here..."
                    onChange={onChangePhone}
                    value={phone}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=" Enter your email..."
                    onChange={onChangeEmail}
                    value={email}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=" Enter your password here..."
                    onChange={onChangePassword}
                    value={password}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=" Please confirm your password.."
                    onChange={onChangeConfirmPassword}
                    value={confirmPassword}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button className="w-100" onClick={OnSubmit}>
                  Sign up
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="d-flex justify-content-between align-items-center w">
            <div className="w-auto mt-1">
              <span>
                Are you a doctor?{" "}
                <Link style={{ textDecoration: "none" }} to="/doctor/signup">
                  Sign up
                </Link>{" "}
              </span>
            </div>
            <div className="w-auto mt-1">
              <span>
                Already have an account?{" "}
                <Link style={{ textDecoration: "none" }} to="/login">
                  Log in
                </Link>{" "}
              </span>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
