import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import image from "../../images/ai.png";
import AlzheimerHook from "../../redux/Hooks/AI/AlzheimerHook";
import DashboardHeader from "./../../components/utilities/DashboardHeader";

const AlzheimerPage = () => {
  const [show, handleClose, handleChangeImage, handleSubmit] = AlzheimerHook();

  return (
    <Container>
      <DashboardHeader text="Checkup / AlZheimer" url="/checkup" />
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

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don not even try to
              press escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AlzheimerPage;
