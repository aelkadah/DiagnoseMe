import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SecTitle from "./../components/utilities/SecTitle";
import LoggedUserHook from "../redux/Hooks/Auth/LoggedUserHook";

const ProfilePage = () => {
  const [userInfo] = LoggedUserHook();

  return (
    <Container>
      <SecTitle title="Profile" />

      <Row>
        <Row className="mb-2 px-2">
          <h4>User Info</h4>
        </Row>
        <Col xm={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={userInfo ? userInfo?.first_name : `First Name`}
              disabled
            />
          </Form.Group>
        </Col>
        <Col xm={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={userInfo ? userInfo?.last_name : `Last Name`}
              disabled
            />
          </Form.Group>
        </Col>
        <Col xm={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={userInfo ? userInfo?.email : `Email Address`}
              disabled
            />
          </Form.Group>
        </Col>
        <Col xm={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={userInfo ? userInfo?.phone_number : `Phone Number`}
              disabled
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-4">
        <Row className="mb-2 px-1">
          <h4>Update Password</h4>
        </Row>
        <Col xm={12} md={4} className="pe-2">
          <Form.Group className="mb-3">
            <Form.Label>Old Passwrod</Form.Label>
            <Form.Control type="password" placeholder="Old Password" disabled />
          </Form.Group>
        </Col>
        <Col xm={12} md={4}>
          <Form.Group className="mb-3 ">
            <Form.Label>New Passwrod</Form.Label>
            <Form.Control type="password" placeholder="New Password" disabled />
          </Form.Group>
        </Col>
        <Col xm={12} md={4}>
          <Form.Group className="mb-3 ">
            <Form.Label>Confirm Passwrod</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              disabled
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex flex-row-reverse">
        <Button className="w-auto" disabled>
          Update Password
        </Button>
      </Row>
    </Container>
  );
};

export default ProfilePage;
