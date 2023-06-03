import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { DoctorCard, SecTitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DoctorsHook from "../redux/Hooks/DoctorsHook";

const DoctorsPage = () => {
  const [doctors, loading] = DoctorsHook();

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
              return <DoctorCard doctor={doctor} key={index} />;
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

      {/* <Paginationn /> */}
    </Container>
  );
};

export default DoctorsPage;
