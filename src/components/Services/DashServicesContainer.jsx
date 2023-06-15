import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ServicesHook from "../../redux/Hooks/Services/ServicesHook";
import DashServiceCard from "./DashServiceCard";
import { Pagination } from "../../components";

const DashServicesContainer = () => {
  const [services, loading, pageCount, getPage] = ServicesHook();

  return (
    <Row className="mt-3">
      {!loading ? (
        services?.data?.length >= 1 ? (
          services?.data.map((service, index) => {
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
      <Pagination pageCount={pageCount} onPress={getPage} />
    </Row>
  );
};

export default DashServicesContainer;
