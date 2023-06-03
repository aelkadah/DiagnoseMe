import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { SecTitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import doctor from "/src/images/doctor.svg";
import Paginationn from "../components/utilities/Pagination";
import Return from "../components/utilities/Return";
import Call from "../components/utilities/Call";
import DoctorsHook from "../redux/Hooks/DoctorsHook";

const DoctorsPage = () => {
  const [Doctor, loading] = DoctorsHook();
  if (Doctor) {
    console.log(Doctor);
  }
  return (
    <Container className="form-section">
      <Return />
      <Call />
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

      {loading === false ? (
        Doctor ? (
          Doctor.map((item) => {
            return (
              <Row
                key={item.id}
                className="mt-5"
                style={{ textAlign: "center" }}
              >
                <Col sm={6} md={12} lg={12}>
                  <div
                    className="card mb-3 card-doctors"
                    style={{ maxwidth: "540px" }}
                  >
                    <div className="row g-0 align-items-center">
                      <div className="col-md-4">
                        <img
                          src={doctor}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-name">
                            <span
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                marginRight: "10px",
                              }}
                            >
                              Name:
                            </span>
                            {item.name}{" "}
                          </h5>
                          <p className="card-text">
                            {" "}
                            <span
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                marginRight: "10px",
                              }}
                            >
                              address:
                            </span>
                            {item.address}
                          </p>
                          <p className="card-text">
                            {" "}
                            <span
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                marginRight: "10px",
                              }}
                            >
                              info:
                            </span>
                            {item.info}
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <span
                                style={{
                                  color: "black",
                                  fontWeight: "bold",
                                  marginRight: "10px",
                                }}
                              >
                                PhoneNumber:
                              </span>
                              {item.PhoneNumber}
                            </small>
                          </p>
                          <a href="#">
                            {" "}
                            <span
                              style={{
                                color: "black",
                                fontWeight: "bold",
                                marginRight: "10px",
                              }}
                            >
                              id:
                            </span>
                            {item.id}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })
        ) : (
          <h4> لا يوجد دكاتره متاحه</h4>
        )
      ) : (
        <Spinner animation="border" variant="primary" />
      )}

      <Paginationn />
    </Container>
  );
};

export default DoctorsPage;
