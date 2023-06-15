import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import { DashboardHeader, DashNewsContainer } from "../../components";
import NewsHook from "../../redux/Hooks/News/NewsHook";

const DashNewsPage = () => {
  const [news, loading, pageCount, getPage] = NewsHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / News" />
      <Container>
        <Row className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="w-auto text-secondary">
            All News : (
            {news?.total ? <span>{news?.total}</span> : <span>0</span>})
          </h5>
          <Button className="w-auto" as={Link} to="/dashboard/news/add">
            Add Article
          </Button>
        </Row>
      </Container>
      <DashNewsContainer />
    </Container>
  );
};

export default DashNewsPage;
