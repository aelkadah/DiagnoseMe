import React from "react";
import { Container, Row } from "react-bootstrap";
import { SecTitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const DoctorsPage = () => {
  return (
    <Container className="form-section">
      <SecTitle
        title={"Doctors"}
        desc="Find and meet our professional doctors"
      />
      <div style={{ textAlign: "center" }}>
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
