import React from "react";
import { Carousel, Row, Button } from "react-bootstrap";
import DoctorsHook from "../../redux/Hooks/DoctorsHook";
import DoctorCard from "../DoctorCard";
import SecTitle from "../utilities/SecTitle";

const FeaturedDoctors = () => {
  const [doctors, loading] = DoctorsHook();

  return (
    <Row>
      <SecTitle
        title={"Doctors"}
        desc="Find and meet our professional doctors"
      />

      <Carousel autoPlay>
        {/* <div className="row">
          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>

        <div className="row">
          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>

        <div className="row">
          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={6} md={12} lg={6}>
            <div
              className="card mb-3 card-doctors"
              style={{ maxwidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={doctor}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-name">Ahmed Tantawy,B,BSc.</h5>
                    <p className="card-text">
                      Physiotherapist, Sports Therapist,Manual Therapist
                    </p>
                    <p className="card-text">
                      Lectus condimentum sagittis velinteger. Pretium vel enim
                      viva-rnus odio interdum ac integer. Enim id
                    </p>

                    <p className="card-text">
                      <small className="text-body-secondary">
                        Consultation at : Lubuklinggau Clinic
                      </small>
                    </p>

                    <a href="#"> More About Tantawy</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div> */}
      </Carousel>

      <div className="text-center show-all-doctors-div">
        <Button> View All Doctors </Button>
      </div>
    </Row>
  );
};

export default FeaturedDoctors;
