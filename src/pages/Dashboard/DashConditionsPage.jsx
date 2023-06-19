import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";
import DashConditionsContainer from "./../../components/Conditions/DashConditionsContainer";
import ConditionsHook from "../../redux/Hooks/Conditions/ConditionsHook";

const DashConditionsPage = () => {
  const [conditions, loading, pageCount, getPage] = ConditionsHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / Conditions" />
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="w-auto text-secondary">
            All Conditions :
            {conditions?.total ? (
              <span> ({conditions?.total})</span>
            ) : (
              <span> (0)</span>
            )}
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
      <DashConditionsContainer />
    </Container>
  );
};

export default DashConditionsPage;
