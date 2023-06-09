import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { DoctorCard, SecTitle } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../components/utilities/Pagination";
import DoctorsHook from "./../../redux/Hooks/Doctor/DoctorsHook";

const DoctorsPage = () => {
  const [doctors, loading, pageCount, getPage, total] = DoctorsHook();

  return (
    <Container className="form-section">
      <SecTitle
        title={"Doctors"}
        desc="Find and meet our professional doctors"
      />

      <div className="pb-4 text-center">
        <div style={{ justifyContent: "center" }} className="search-box d-flex">
          <input placeholder="serach here" type="text" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <Row className="mt-5 text-center">
        {!loading ? (
          doctors?.length >= 1 ? (
            doctors.map((doctor, index) => {
              return (
                <Col sm={12} md={6} lg={6} key={index}>
                  <DoctorCard doctor={doctor} />
                </Col>
              );
            })
          ) : (
            <h2 className="text-center py-5">No Doctors right now!</h2>
          )
        ) : (
          <Container className="text-center py-4">
            <Spinner animation="border" variant="primary" />
          </Container>
        )}
      </Row>

      <Pagination pageCount={pageCount} onPress={getPage} />
    </Container>
  );
};

export default DoctorsPage;
