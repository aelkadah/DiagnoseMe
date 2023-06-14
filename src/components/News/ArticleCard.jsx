import React from "react";
import { Link } from "react-router-dom";
import { Row, Card } from "react-bootstrap";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/news/${article?.id}`}>
      <Row className="mt-5">
        <Card className="newsCard">
          <div className="backgroundImg">
            <img src={`http://127.0.0.1:8000/storage/${article?.image}`} />
            <span>{article?.date}</span>
          </div>
          <Card.Body>
            <Card.Text
              className="d-flex justify-content-between align-items-center"
              style={{ fontSize: "10px" }}
            >
              <span className="w-auto">By Ahmed</span>
              <span className="w-auto">{article?.id} comments</span>
            </Card.Text>
            <Card.Text className="mb-2 truncate-two">
              {article?.description}
            </Card.Text>
            <p className="text-primary fw-normal my-1">Read more</p>
          </Card.Body>
        </Card>
      </Row>
    </Link>
  );
};

export default ArticleCard;
