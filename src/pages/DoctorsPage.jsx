import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SecTitle } from "../components";
import loginpic from "/src/images/login.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const DoctorsPage = () => {
  return (
    <Container className="form-section">
      <SecTitle title={"Doctors "} />
      <div style={{ textAlign: "center" }}>
        {" "}
        <span className="second-tittle">
          Find and meet our professional doctors
        </span>
        <div style={{ justifyContent: "center" }} className="search-box d-flex">
          <input placeholder="serach here" type="text" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <Row className="mt-5" style={{ textAlign: "center" }}></Row>
    </Container>
  );
};

export default DoctorsPage;
