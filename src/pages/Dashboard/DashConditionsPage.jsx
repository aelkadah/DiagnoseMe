import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";

const DashConditionsPage = () => {
  return (
    <Container>
      <DashboardHeader text="Dashboard / Conditions" />
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="w-auto text-secondary">
            All Conditions : (2)
            {/* {services?.length >= 1 ? (
            <span> ({services?.length})</span>
          ) : (
            <span> (0)</span>
          )} */}
          </h5>
          <Button
            className="w-auto"
            as={Link}
            to="/dashboard/conditions/add"
            // onClick={handleShow}
          >
            Add Condition
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default DashConditionsPage;
