import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import DashboardHeader from "./../../components/utilities/DashboardHeader";

const UpgradePage = () => {
  return (
    <Container>
      <DashboardHeader text="User / Upgrade Plan" url={`/profile`} />

      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis a
          incidunt reiciendis dolores tempore ipsa eveniet, libero distinctio
          tempora odio in iure corporis obcaecati, beatae unde. Minus,
          repudiandae quod.
        </p>
      </Row>
    </Container>
  );
};

export default UpgradePage;
