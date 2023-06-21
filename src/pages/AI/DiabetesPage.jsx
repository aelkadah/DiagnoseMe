import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Modal,
  Button,
  Spinner,
} from "react-bootstrap";
import DiabetesHook from "../../redux/Hooks/AI/DiabetesHook";
import { DashboardHeader } from "../../components";
import image from "../../images/ai.png";
import congratulations from "../../images/congratulations.png";
import unfortunately from "../../images/unfortunately.png";

const DiabetesPage = () => {
  const [
    show,
    handleClose,
    handleShow,
    age,
    onChangeAge,
    gender,
    onChangeGender,
    hypertension,
    onChangeHypertension,
    heartdiseases,
    onChangeHeartdiseases,
    bmi,
    onChangeBmi,
    hba1c,
    onChangeHba1c,
    glucose,
    onChangeGlucose,
    handleSubmit,
    result,
    handleDone,
    handleFindDoctor,
  ] = DiabetesHook();

  return (
    <Container>
      <DashboardHeader text="Checkup / Diabetest" url="/checkup" />
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <img src={image} alt="AI" />
        </Col>
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={gender}
                    onChange={onChangeGender}
                  >
                    <option>Choose your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="20,21,22,..."
                    value={age}
                    onChange={onChangeAge}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Hypertension</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={hypertension}
                    onChange={onChangeHypertension}
                  >
                    <option value={0}>No</option>
                    <option value="1">Yes</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Heart Diseases</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={heartdiseases}
                    onChange={onChangeHeartdiseases}
                  >
                    <option value={0}>No</option>
                    <option value="1">Yes</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>bmi</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="20, 22, 30, ..."
                    value={bmi}
                    onChange={onChangeBmi}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>HbA1c level</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="6, 6.1, 6.2 , ..."
                    value={hba1c}
                    onChange={onChangeHba1c}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>blood glucose level</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="120, 140, 160, ..."
                    value={glucose}
                    onChange={onChangeGlucose}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <div className="d-flex justify-content-end">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            {result && result !== "" ? (
              result === "congratz" ? (
                <Modal.Body className="text-center d-flex flex-column align-items-center pt-3 pb-4">
                  <div
                    className="rounded-circle bg-success my-4 d-flex justify-content-center align-items-center"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <img
                      src={congratulations}
                      style={{ width: "fit-content" }}
                    />
                  </div>
                  <h3 className="text-success">Congratulations</h3>
                  <h5 className="mt-0 text-black-50">
                    Your analysis are negative
                  </h5>
                </Modal.Body>
              ) : (
                <Modal.Body className="text-center d-flex flex-column align-items-center pt-3 pb-4">
                  <div
                    className="rounded-circle bg-danger my-4 d-flex justify-content-center align-items-center"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <img src={unfortunately} style={{ width: "70%" }} />
                  </div>
                  <h3 className="text-danger">Unfortunately</h3>
                  <h5 className="mt-0 text-black-50">
                    Your analysis are positive!
                    <span className="d-block mt-1">
                      Find a doctor and make an appointment
                    </span>
                  </h5>
                </Modal.Body>
              )
            ) : (
              <Container className="text-center py-4">
                <Spinner animation="border" variant="primary" />
              </Container>
            )}

            {result && result !== "" ? (
              result == "congratz" ? (
                <Modal.Footer className="d-flex justify-content-center py-3">
                  <Button
                    variant="success"
                    className="w-50 rounded-3"
                    onClick={handleDone}
                  >
                    Done
                  </Button>
                </Modal.Footer>
              ) : (
                <Modal.Footer className="d-flex justify-content-end py-3">
                  <Button
                    variant="danger"
                    className="rounded-3"
                    onClick={handleDone}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-3"
                    onClick={handleFindDoctor}
                  >
                    Find a Doctor
                  </Button>
                </Modal.Footer>
              )
            ) : null}
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default DiabetesPage;
