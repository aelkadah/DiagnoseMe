import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";
import AddConditionHook from "../../redux/Hooks/Conditions/AddConditionHook";

const DashConditionsAddPage = () => {
  const [
    title,
    onChangeTitle,
    desc,
    onChangeDesc,
    image,
    onChangeImage,
    handleSubmit,
  ] = AddConditionHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Conditions / Add" />

      <Container>
        <Row className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Condition Cover</Form.Label>
            <Form.Control type="file" onChange={onChangeImage} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type title here..."
              value={title}
              onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Condition Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Some information about descriptioon...."
              value={desc}
              onChange={onChangeDesc}
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
