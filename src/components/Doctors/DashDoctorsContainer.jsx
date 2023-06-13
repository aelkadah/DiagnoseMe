import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import DoctorsHook from "../../redux/Hooks/Doctor/DoctorsHook";
import DashDoctorCard from "./DashDoctorCard";
import Pagination from "./../utilities/Pagination";

const DashDoctorsContainer = () => {
  const [doctors, loading, pageCount, getPage, total] = DoctorsHook();

  return (
    <Row className="mt-4">
      {!loading ? (
        doctors?.length >= 1 ? (
          doctors.map((doctor, index) => {
            return (
              <Col sm={12} md={6} lg={6} key={index}>
                <DashDoctorCard doctor={doctor} />
              </Col>
            );
          })
        ) : (
          <h2 className="text-center py-5">No Doctors right now!</h2>
        )
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}
      <Pagination pageCount={pageCount} onPress={getPage} />
    </Row>
  );
};

export default DashDoctorsContainer;
