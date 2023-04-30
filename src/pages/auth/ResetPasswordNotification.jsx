import React from "react";
import notifcation from "/src/images/reset_notification.svg";
import { Container } from "react-bootstrap";
import { SecTitle } from "../../components";
import Call from "../../components/utilities/Call";

const ResetPasswordNotification = () => {
  return (
    <Container className="form-section">
      <Call />
      <SecTitle title={"Reset code"} />

      <div style={{ textAlign: "center" }}>
        <h1>please enter verification code sent to your email</h1>
        <img src={notifcation} />
      </div>
    </Container>
  );
};

export default ResetPasswordNotification;
