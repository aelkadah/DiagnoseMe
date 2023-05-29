import React from "react";
import { Container, Row } from "react-bootstrap";
import { SecTitle } from "../../components";
import Call from "../../components/utilities/Call";
// import { call } from "@fortawesome/free-solid-svg-icons";

const ForgetPasswordPage = () => {
  return (
    <Container>
      <Call />
      <SecTitle title={"Forget Password"} />
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          pariatur possimus porro ut officiis accusantium et minima. Laborum,
          dolorum. Quam cupiditate accusamus dicta neque ipsam vero aperiam
          corrupti! Dolores, repudiandae.
        </p>
      </Row>
    </Container>
  );
};

export default ForgetPasswordPage;
