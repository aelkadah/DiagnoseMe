import React from "react";
import { Link } from "react-router-dom";
import { Row, Card } from "react-bootstrap";
import DeleteArticleHook from "../../redux/Hooks/News/DeleteArticleHook";

const DashArticleCard = ({ article }) => {
  const [handleDelete] = DeleteArticleHook(article);

  return (
    <Link onClick={handleDelete}>
      <Row className="mt-5">
        <Card className="newsCard deleteHover">
          <div className="backgroundImg">
            <img src={`http://127.0.0.1:8000/storage/${article?.image}`} />
            <span>{new Date(article?.created_at).toDateString()}</span>
          </div>
          <Card.Body>
            <Card.Text
              className="d-flex justify-content-between align-items-center"
              style={{ fontSize: "10px" }}
            >
              <span className="w-auto">By Ahmed</span>
              <span className="w-auto">{article?.id} comments</span>
            </Card.Text>
            <Card.Text className="fw-normal truncate-two mb-2">
              {article?.name}
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

export default DashArticleCard;
