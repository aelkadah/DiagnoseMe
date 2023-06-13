import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ServicesHook from "../../redux/Hooks/Services/ServicesHook";
import DashServiceCard from "./DashServiceCard";

const DashServicesContainer = () => {
  const [services, loading] = ServicesHook();

  return (
    <Row className="mt-3">
      {!loading ? (
        services?.length >= 1 ? (
          services.map((service, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <DashServiceCard service={service} />
              </Col>
            );
          })
        ) : (
          <h2 className="text-center py-5">No Services right now!</h2>
        )
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}
    </Row>
  );
};

export default DashServicesContainer;
