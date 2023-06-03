import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import loginpic from "/src/images/login.svg";
import { Link } from "react-router-dom";
import Call from "../../components/utilities/Call";
import LoginHook from "../../redux/Hooks/Auth/LooginHook";
import { ToastContainer } from "react-toastify";
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
      <Call />

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
              <div style={{ textAlign: "end" }}>
                <span>
                  Forget password ?{" "}
                  <Link style={{ textDecoration: "none" }} to="/resetpassword">
                    {" "}
                    Reset Passwrod{" "}
                  </Link>
                </span>
              </div>
            </Form.Group>

            <Button
              style={{ width: "100%", borderRadius: "10px" }}
              variant="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Form>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <span>
              Don’t have an account ?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                Sign up ?
              </Link>
            </span>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
