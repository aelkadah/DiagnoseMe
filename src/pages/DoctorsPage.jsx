import React from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import { SecTitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import doctor from "/src/images/doctor.svg";
import Paginationn from "../components/utilities/Pagination";

const DoctorsPage = () => {
  const dataa = [
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
    {
      name: "Ahmed Tantawy,B,BSc.",
      par1: "Physiotherapist, Sports Therapist,Manual Therapist",
      par2: "Lectus condimentum sagittis velinteger. Pretium vel enim viva-rnus odio interdum ac integer. Enim id",
      title: "Consultation at : Lubuklinggau Clinic",
      link: "More About Tantawy",
    },
  ];
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
      <Row className="mt-5" style={{ textAlign: "center" }}>
        {dataa.map((item) => {
          return (
            <Col sm={6} md={12} lg={6}>
              <div class="card mb-3 card-doctors" style={{ maxwidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={doctor}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-name">{item.name} </h5>
                      <p class="card-text">{item.par1}</p>
                      <p class="card-text">{item.par2}</p>

                      <p class="card-text">
                        <small class="text-body-secondary">{item.title}</small>
                      </p>

                      <a href="#"> {item.link}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Paginationn />
    </Container>
  );
};

export default DoctorsPage;
