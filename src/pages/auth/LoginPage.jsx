import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import { Link } from "react-router-dom";
import LoginHook from "../../redux/Hooks/Auth/LoginHook";

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();

  return (
    <Container className="form-section">
      <SecTitle title={"Login"} />

      <Row>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={loginpic} style={{ width: "100%" }} />
        </div>
        <Col sm={12} lg={6} style={{ marginTop: "80px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder=" Enter your email here..."
                className=""
                onChange={onChangeEmail}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password here..."
                value={password}
                onChange={onChangePassword}
              />
              <div style={{ textAlign: "end" }} className="mt-2">
                <span>
                  Forget password ?{" "}
                  <Link style={{ textDecoration: "none" }} to="/resetpassword">
                    {" "}
                    Reset Passwrod{" "}
                  </Link>
                </span>
              </div>
            </Form.Group>

            <Button className="w-100" variant="primary" onClick={onSubmit}>
              Login
            </Button>
          </Form>
          <Row className="d-flex justify-content-between align-items-center w">
            <div className="w-auto mt-1">
              <span>
                Are you a doctor ?{" "}
                <Link style={{ textDecoration: "none" }} to="/doctor/login">
                  Login ?
                </Link>
              </span>
            </div>
            <div className="w-auto mt-1">
              <span>
                Don’t have an account ?{" "}
                <Link style={{ textDecoration: "none" }} to="/signup">
                  Sign up ?
                </Link>
              </span>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
