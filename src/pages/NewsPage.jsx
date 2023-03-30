import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { SecTitle } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import news from "/src/images/news.svg";
import Paginationn from "../components/utilities/Pagination";
const NewsPage = () => {
  const dataa = [
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
  ];
  return (
    <Container className="form-section">
      <SecTitle title={"News"} desc="See our latest trending news" />
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
            <Col sm={12} md={12} lg={4}>
              <Card className="news-card">
                {/* <Card.Img variant="top" src={news} /> */}
                <div className="div-background">
                  <img src={news} />
                  <span>{item.date}</span>
                </div>
                <Card.Body>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className="d-flex"
                  >
                    <span style={{ fontSize: "10px" }}>{item.user}</span>
                    <span style={{ fontSize: "10px" }}>{item.comments}</span>
                  </div>
                  <Card.Text>{item.par}</Card.Text>
                  <a href="#">{item.link}</a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Paginationn />
    </Container>
  );
};

export default NewsPage;
