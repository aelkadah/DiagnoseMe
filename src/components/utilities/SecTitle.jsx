import React from "react";
import { Row } from "react-bootstrap";

const SecTitle = ({ title, desc }) => {
  if (title && title != "")
    return (
      <Row className="py-4">
        <h1 className="secTitle">{title}</h1>
        {desc && desc != "" ? <p>{desc}</p> : null}
      </Row>
    );
};

export default SecTitle;
