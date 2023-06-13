import React from "react";
import { Container } from "react-bootstrap";
import { SecTitle, ServicesContainer } from "../components";

const ServicesPage = () => {
  return (
    <Container>
      <SecTitle title={"Services "} desc="What we provide?" />
      <ServicesContainer />
    </Container>
  );
};

export default ServicesPage;
