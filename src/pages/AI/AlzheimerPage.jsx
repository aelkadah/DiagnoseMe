import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import image from "../../images/ai.png";
import AlzheimerHook from "../../redux/Hooks/AI/AlzheimerHook";

const AlzheimerPage = () => {
  const [handleChangeImage, handleSubmit] = AlzheimerHook();

  return (
    <Container>
      <Row>Headiiiiiiiiiing</Row>
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <img src={image} alt="AI" />
        </Col>
        <Col xs={12} md={8}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fw-bold">
              MRI (Magnetic Resonance Imaging)
            </Form.Label>
            <Form.Control type="file" onChange={handleChangeImage} />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AlzheimerPage;
