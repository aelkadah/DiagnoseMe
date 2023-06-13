import React from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import DashboardHeader from "./../../components/utilities/DashboardHeader";
import { DashServicesContainer } from "./../../components";
import ServicesHook from "../../redux/Hooks/Services/ServicesHook";
import AddServiceHook from "../../redux/Hooks/Services/AddServiceHook";

const DashServicesPage = () => {
  const [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    desc,
    onChangeDesc,
    image,
    onChangeImage,
    handleSubmit,
  ] = AddServiceHook();

  const [services, loading] = ServicesHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Services" />
      <Container>
        <Row className="mt-3">
          <Row className="d-flex justify-content-between align-items-center">
            <h5 className="w-auto text-secondary">
              All Services:
              {services?.length >= 1 ? (
                <span> ({services?.length})</span>
              ) : (
                <span> (0)</span>
              )}
            </h5>
            <Button className="w-auto" onClick={handleShow}>
              Add Service
            </Button>
          </Row>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Service Image</Form.Label>
                    <Form.Control
                      type="file"
                      // value={image}
                      onChange={onChangeImage}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Service Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Diagnosis, Analysis, ..."
                      value={name}
                      onChange={onChangeName}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Desctiption</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Information about the service...."
                      value={desc}
                      onChange={onChangeDesc}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
      <DashServicesContainer />
    </Container>
  );
};

export default DashServicesPage;
