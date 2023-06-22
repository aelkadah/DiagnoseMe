import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { DashboardHeader } from "./../../../components";
import ScheduleHook from "../../../redux/Hooks/Schedule/ScheduleHook";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

const DoctorSchedulePage = () => {
  const [events, loading] = ScheduleHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Schedule" url="/dashboard" />
      <Row>
        {!loading ? (
          events?.length >= 1 ? (
            <FullCalendar
              firstDay={6}
              plugins={[listPlugin]}
              initialView="listWeek"
              events={events}
            />
          ) : (
            <h3>No, reserved appointments rightnow!</h3>
          )
        ) : (
          <Container className="text-center py-4">
            <Spinner animation="border" variant="primary" />
          </Container>
        )}
      </Row>
    </Container>
  );
};

export default DoctorSchedulePage;
