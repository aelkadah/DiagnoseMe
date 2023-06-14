import React from "react";
import { Container } from "react-bootstrap";
import { ConditionsContainer, SecTitle } from "../../components";

const ConditionsPage = () => {
  return (
    <Container className="form-section">
      <SecTitle title={"Conditions"} desc="See our latest trending news" />

      <ConditionsContainer />
    </Container>
  );
};

export default ConditionsPage;
