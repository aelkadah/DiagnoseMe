import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { DashboardHeader } from "./../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import ArticleHook from "../../redux/Hooks/News/ArticleHook";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, loading] = ArticleHook(id);

  return (
    <Container>
      <DashboardHeader text="News / Article" url="/news" />
      <Row className="mt-3">
        <h1 className="text-noto fw-bold border-bottom border-opacity-50 pb-3">
          {article?.name}
        </h1>
        <Row className="d-flex align-items-center justify-content-between text-black-50 mb-3 mt-1 ps-3 pe-0">
          <span className="w-auto">By Ahmed</span>
          <span className="d-flex align-items-center w-auto">
            <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
            {new Date(article?.created_at).toDateString()}
          </span>
        </Row>
      </Row>
      <Row>
        <img src={`http://127.0.0.1:8000/storage/${article?.image}`} />
      </Row>
      <Row className="mt-3">
        <p className="fs-5 fw-normal">{article?.description}</p>
      </Row>
    </Container>
  );
};

export default ArticlePage;
