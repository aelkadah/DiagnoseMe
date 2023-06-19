import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DoctorDetailsHook from "./../../redux/Hooks/Doctor/DoctorDetailsHook";
import DashboardHeader from "./../../components/utilities/DashboardHeader";

const ReservationPage = () => {
  const { id } = useParams();
  const [doctor, loading] = DoctorDetailsHook(id);

  return (
    <Container>
      <DashboardHeader text="Doctor / Reserve" url={`/doctors/${id}`} />

      <Row className="mt-4 px-2">
        <h3 className="mb-2">
          Dr. {doctor?.first_name} {doctor?.last_name}
        </h3>
      </Row>
    </Container>
  );
};

export default ReservationPage;
