import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../../../components";
import loginpic from "/src/images/doctor-sign.svg";
import DoctorRegisterHook from "../../../redux/Hooks/Auth/DoctorRegisterHook";

const DoctorRegisterPage = () => {
  const [
    fname,
    onChangeFName,
    lname,
    onChangeLName,
    user,
    onChangeUser,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    address,
    onChangeAddress,
    info,
    onChangeInfo,
    pass,
    onChangePass,
    passConf,
    onChangePassConf,
    spec,
    onChangeSpec,
    image,
    onChangeImage,
    handleRegister,
  ] = DoctorRegisterHook();

  return (
    <Container className="form-section">
      <SecTitle title={"Signup"} />
      <Row>
        <Col xs={12} md={5} className="pb-4">
          <img src={loginpic} style={{ width: "100%" }} />
        </Col>
        <Col sm={12} lg={7}>
          <Form>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your first name..."
                    onChange={onChangeFName}
                    value={fname}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your last name..."
                    onChange={onChangeLName}
                    value={lname}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name here..."
                    onChange={onChangeEmail}
                    value={email}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username here..."
                    onChange={onChangeUser}
                    value={user}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone number </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number here..."
                    onChange={onChangePhone}
                    value={phone}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your address here..."
                    onChange={onChangeAddress}
                    value={address}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password here..."
                    onChange={onChangePass}
                    value={pass}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=" Please confirm your password.."
                    onChange={onChangePassConf}
                    value={passConf}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your specialization here..."
                onChange={onChangeSpec}
                value={spec}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Information</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your information here...."
                value={info}
                onChange={onChangeInfo}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={onChangeImage} />
            </Form.Group>
            <Button className="w-100" onClick={handleRegister}>
              Sign up{" "}
            </Button>
          </Form>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <span>
              Already have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/doctor/login">
                Log in
              </Link>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorRegisterPage;
