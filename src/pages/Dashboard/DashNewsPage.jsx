import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import DashboardHeader from "../../components/utilities/DashboardHeader";
import { Link } from "react-router-dom";

const DashNewsPage = () => {
  return (
    <Container>
      <DashboardHeader text="Dashboard / News" />
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="w-auto text-secondary">
            All News : (2)
            {/* {services?.length >= 1 ? (
            <span> ({services?.length})</span>
          ) : (
            <span> (0)</span>
          )} */}
          </h5>
          <Button
            className="w-auto"
            as={Link}
            to="/dashboard/news/add"
            // onClick={handleShow}
          >
            Add Article
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default DashNewsPage;
