import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { DashboardHeader } from "../../../components";
import ChooseAvailableDaysHook from "../../../redux/Hooks/Doctor/ChooseAvailableDaysHook";

const WorkingDaysPage = () => {
  const [
    satVal,
    onChangeSat,
    sunVal,
    onChangeSun,
    monVal,
    onChangeMon,
    tueVal,
    onChangeTue,
    wedVal,
    onChangeWed,
    thuVal,
    onChangeThu,
    friVal,
    onChangeFri,
    onSave,
  ] = ChooseAvailableDaysHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Working Days" url="/dashboard" />

      <Row className="d-flex justify-content-between align-items-center mt-3 ">
        <h4 className="mb-4">Working Days</h4>
        <Form className="">
          <Row className="align-items-center">
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-sat"
                type="switch"
                label="Saturday"
                checked={satVal}
                onChange={onChangeSat}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-sun"
                type="switch"
                label="Sunday"
                checked={sunVal}
                onChange={onChangeSun}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-mon"
                type="switch"
                label="Monday"
                checked={monVal}
                onChange={onChangeMon}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-tue"
                type="switch"
                label="Tuesday"
                checked={tueVal}
                onChange={onChangeTue}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-wed"
                type="switch"
                label="Wednesday"
                checked={wedVal}
                onChange={onChangeWed}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-thu"
                type="switch"
                label="Thurssday"
                checked={thuVal}
                onChange={onChangeThu}
              />
            </Col>
            <Col xs={6} md={3}>
              <Form.Check
                className="mb-3"
                id="custom-switch-fri"
                type="switch"
                label="Friday"
                checked={friVal}
                onChange={onChangeFri}
              />
            </Col>
          </Row>
        </Form>
        <Row className="mt-3 px-4">
          <Button className="w-auto px-5" onClick={onSave}>
            Save
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default WorkingDaysPage;
