import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import news from "/src/images/news.svg";
const Cards = () => {
  const dataa = [
    {
      date: "February 05,2023",
      user: "By Ahmed",
      comments: "5 comments",
      par: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "read more",
    },
  ];
  return (
    <Row className="mt-5" style={{ textAlign: "center" }}>
      {dataa.map((item) => {
        return (
          <Col>
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
                <Card.Text className="mt-3">{item.par}</Card.Text>
                <a href="#">{item.link}</a>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Cards;
