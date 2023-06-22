import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEllipsisVertical,
  faLocationDot,
  faPhone,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Modal, Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DoctorDetailsHook from "../../redux/Hooks/Doctor/DoctorDetailsHook";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import ReserveHook from "../../redux/Hooks/Schedule/ReserveHook";

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, loading] = DoctorDetailsHook(id);

  const [
    show,
    handleShow,
    handleClose,
    startDate,
    setStartDate,
    isWeekday,
    filterPassedTime,
    handleChooseDate,
    handleSubmit,
  ] = ReserveHook(id);

  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex justify-content-start align-items-center gap-2 w-auto">
          <Link
            to={`/doctors`}
            className="bg-light d-flex align-items-center justify-content-center rounded-circle"
            style={{ height: "40px", width: "40px" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
          </Link>
          <h4 className="w-auto h-auto pt-2">Doctor Details</h4>
        </div>
        <span
          className="bg-light d-flex align-items-center justify-content-center rounded-circle"
          style={{ height: "40px", width: "40px" }}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} fixedWidth />
        </span>
      </Row>
      {!loading ? (
        <Row className="mt-5">
          <Col xs={12} md={4} className="mb-3">
            <img
              alt=""
              src={`http://127.0.0.1:8000/storage/${doctor?.image}`}
            />
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-flex flex-column align-items-sm-center align-items-md-start"
          >
            <div className="w-100 d-flex flex-md-row flex-column mb-1 mb-md-0 justify-content-between align-items-center">
              <h3 className="mb-2">
                Dr. {doctor?.first_name} {doctor?.last_name}
              </h3>

              {JSON.parse(localStorage.getItem("userInfo"))?.premium == 1 ? (
                <Button className="px-3 rounded-5" onClick={handleShow}>
                  Reserve a visit
                </Button>
              ) : (
                <Button className="px-3 rounded-5" disabled>
                  Reserve a visit
                </Button>
              )}
            </div>

            <div className="d-flex justify-content-start gap-3 w-auto ms-1">
              <h6 className="w-auto opacity-75 mt-0 py-0">
                {doctor?.specialization}
              </h6>
              <div className="d-flex text-warning">
                <FontAwesomeIcon icon={faStar} fixedWidth />
                <FontAwesomeIcon icon={faStar} fixedWidth />
                <FontAwesomeIcon icon={faStar} fixedWidth />
                <FontAwesomeIcon icon={faStar} fixedWidth />
                <FontAwesomeIcon icon={faStarHalfStroke} fixedWidth />
              </div>
            </div>

            <h6 className="d-flex justify-content-start align-items-center text-danger">
              <FontAwesomeIcon icon={faLocationDot} fixedWidth />
              {doctor?.address}
            </h6>

            <h6 className="d-flex justify-content-start align-items-center text-danger">
              <FontAwesomeIcon
                icon={faPhone}
                fixedWidth
                className="ms-0 me-2"
              />
              {doctor?.phone_number}
            </h6>

            <p className="text-secondary mt-2">{doctor?.info}</p>
          </Col>
        </Row>
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book an appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <DatePicker
            inline
            selected={startDate}
            onChange={handleChooseDate}
            filterDate={isWeekday}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd h:mm aa"
            showTimeSelect
            filterTime={filterPassedTime}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            className="border border-opacity-10"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DoctorDetailsPage;
