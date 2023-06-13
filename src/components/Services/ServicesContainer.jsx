import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ServicesHook from "../../redux/Hooks/Services/ServicesHook";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
  const [services, loading] = ServicesHook();

  return (
    <Row>
      {!loading ? (
        services?.length >= 1 ? (
          services.map((service, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <ServiceCard service={service} />
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

export default ServicesContainer;
