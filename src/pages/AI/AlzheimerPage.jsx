import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import image from "../../images/ai.png";
import AlzheimerHook from "../../redux/Hooks/AI/AlzheimerHook";
import DashboardHeader from "./../../components/utilities/DashboardHeader";
import congratulations from "../../images/congratulations.png";
import smile from "../../images/smile.png";
import unfortunately from "../../images/unfortunately.png";

const AlzheimerPage = () => {
  const [
    show,
    handleClose,
    handleChangeImage,
    handleSubmit,
    result,
    handleDone,
    handleFindDoctor,
  ] = AlzheimerHook();

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
            {result && result == "Non Demented" ? (
              <Modal.Body className="text-center d-flex flex-column align-items-center pt-3 pb-4">
                <div
                  className="rounded-circle bg-success my-4 d-flex justify-content-center align-items-center"
                  style={{ width: "200px", height: "200px" }}
                >
                  <img src={congratulations} style={{ width: "fit-content" }} />
                </div>
                <h3 className="text-success">Congratulations</h3>
                <h5 className="mt-0 text-black-50">
                  Your MRI analysis:
                  <span className="text-primary"> Non-Demented</span>
                </h5>
              </Modal.Body>
            ) : null}
            {result && result == "Very Mild Demented" ? (
              <Modal.Body className="text-center d-flex flex-column align-items-center pt-3 pb-4">
                <div
                  className="rounded-circle bg-primary my-4 d-flex justify-content-center align-items-center"
                  style={{ width: "200px", height: "200px" }}
                >
                  <img src={smile} style={{ width: "90%" }} />
                </div>
                <h4 className="mt-0 text-black-50">Your MRI analysis:</h4>
                <h3 className="text-primary"> Very Mild Demented</h3>
              </Modal.Body>
            ) : null}
            {(result && result == "Mild Demented") ||
            result == "Moderate Demented" ? (
              <Modal.Body className="text-center d-flex flex-column align-items-center pt-3 pb-4">
                <div
                  className="rounded-circle bg-danger my-4 d-flex justify-content-center align-items-center"
                  style={{ width: "200px", height: "200px" }}
                >
                  <img src={unfortunately} style={{ width: "80%" }} />
                </div>
                <h3 className="text-danger">Unfortunately</h3>
                <h5 className="mt-0 text-black-50">
                  Your MRI analysis:
                  <span className="text-primary"> {result}</span>
                </h5>
              </Modal.Body>
            ) : null}

            {result && result == "Non Demented" ? (
              <Modal.Footer className="d-flex justify-content-end py-3 mx-5">
                <Button
                  variant="success"
                  className="rounded-3 w-100"
                  onClick={handleDone}
                >
                  Done
                </Button>
              </Modal.Footer>
            ) : null}
            {(result && result == "Very Mild Demented") ||
            result == "Mild Demented" ||
            result == "Moderate Demented" ? (
              <Modal.Footer className="d-flex justify-content-end py-3">
                <Button variant="danger" onClick={handleDone}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleFindDoctor}>
                  Find a Doctor
                </Button>
              </Modal.Footer>
            ) : null}
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AlzheimerPage;
