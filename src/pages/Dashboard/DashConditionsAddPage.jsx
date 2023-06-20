import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";
import AddConditionHook from "../../redux/Hooks/Conditions/AddConditionHook";

const DashConditionsAddPage = () => {
  const [
    overview,
    onChangeOverview,
    symptoms,
    onChangeSymptoms,
    risks,
    onChangeRisks,
    prognosis,
    onChangePrognosis,
    diagnosis,
    onChangeDiagnosis,
    treatment,
    onChangeTreatment,
    handleSubmit,
  ] = AddConditionHook();

  return (
    <Container>
      <DashboardHeader
        text="Dashboard / Conditions / Add"
        url="/dashboard/conditions"
      />

      <Container>
        <Row className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Condition Overview</Form.Label>
            <Form.Control
              type="text"
              placeholder="Condition overview here..."
              value={overview}
              onChange={onChangeOverview}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Symptoms</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Some information about descriptioon...."
              value={symptoms}
              onChange={onChangeSymptoms}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Risks</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Some information about descriptioon...."
              value={risks}
              onChange={onChangeRisks}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Prognosis</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Some information about descriptioon...."
              value={prognosis}
              onChange={onChangePrognosis}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Diagnosis</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Some information about descriptioon...."
              value={diagnosis}
              onChange={onChangeDiagnosis}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Treatment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Some information about descriptioon...."
              value={treatment}
              onChange={onChangeTreatment}
            />
          </Form.Group>
          <Row className="d-flex justify-content-end px-0">
            <Button className="w-auto" onClick={handleSubmit}>
              Submit
            </Button>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default DashConditionsAddPage;
