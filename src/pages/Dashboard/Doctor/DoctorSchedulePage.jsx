import React from "react";
import { Container, Row } from "react-bootstrap";
import { DashboardHeader } from "./../../../components";
import ScheduleHook from "../../../redux/Hooks/Schedule/ScheduleHook";

const DoctorSchedulePage = () => {
  const [schedule, loading] = ScheduleHook();
  if (schedule) console.log(schedule);

  return (
    <Container>
      <DashboardHeader text="Dashboard / Schedule" url="/dashboard" />
      <Row></Row>
    </Container>
  );
};

export default DoctorSchedulePage;
