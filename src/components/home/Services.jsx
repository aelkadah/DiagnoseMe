import React from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { SecTitle } from "..";
import { Link } from "react-router-dom";
import ServicesHook from "../../redux/Hooks/Services/ServicesHook";
import ServiceCard from "./../Services/ServiceCard";

const Services = () => {
  const [services, loading, pageCount, getPage] = ServicesHook();

  return (
    <Container className="bg-light py-4">
      <Row className="bg-light">
        <SecTitle title="Services" desc="What we provide?" />
        <Row>
          {!loading ? (
            services?.data?.length >= 1 ? (
              services?.data.map((service, index) => {
                return (
                  <Col xs={6} md={3} key={index}>
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
      </Row>
      <Row className="text-center mt-4 d-flex justify-content-center">
        <Button className="w-auto" to="/services" as={Link}>
          All Services
        </Button>
      </Row>
    </Container>
  );
};

export default Services;
