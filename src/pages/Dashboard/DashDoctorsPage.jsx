import React, { useState } from "react";
import { Container, Row, Button, Col, Form, Modal } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";
import AddDoctorHook from "../../redux/Hooks/Doctor/AddDoctorHook";
import DashDoctorsContainer from "../../components/Doctors/DashDoctorsContainer";
import DoctorsHook from "../../redux/Hooks/Doctor/DoctorsHook";

const DashDoctorsPage = () => {
  const [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    spec,
    onChangeSpec,
    address,
    onChangeAddress,
    phone,
    onChangePhone,
    info,
    onChangeInfo,
    image,
    onChangeImage,
    handleSubmit,
  ] = AddDoctorHook();

  const [doctors, loading, pageCount, getPage] = DoctorsHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Doctors" />
      <Container className="">
        <Row className="mt-3">
          <Row className="d-flex justify-content-between align-items-center">
            <h5 className="w-auto text-secondary">
              All Doctors:
              {doctors?.length >= 1 ? (
                <span> ({doctors?.length})</span>
              ) : (
                <span> (0)</span>
              )}
            </h5>
            <Button className="w-auto" onClick={handleShow}>
              Add Doctor
            </Button>
          </Row>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add Doctor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col xs={12} lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ahmed, Mohamed, ..."
                        value={name}
                        onChange={onChangeName}
                        autoFocus
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Specialization</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Blood Diseases, Diabetes, ..."
                        value={spec}
                        onChange={onChangeSpec}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Salam, Manoura, Egypt."
                        value={address}
                        onChange={onChangeAddress}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="01012345678"
                        value={phone}
                        onChange={onChangePhone}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={info}
                      onChange={onChangeInfo}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Doctor Image</Form.Label>
                    <Form.Control
                      type="file"
                      // value={image}
                      onChange={onChangeImage}
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

        <DashDoctorsContainer />
      </Container>
    </Container>
  );
};

export default DashDoctorsPage;
