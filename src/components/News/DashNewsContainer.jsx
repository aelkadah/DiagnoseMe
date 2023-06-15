import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import NewsHook from "../../redux/Hooks/News/NewsHook";
import { DashArticleCard, Pagination } from "../../components";

const DashNewsContainer = () => {
  const [news, loading, pageCount, getPage] = NewsHook();

  return (
    <Row>
      {!loading ? (
        news?.data?.length >= 1 ? (
          news?.data.map((article, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index}>
                <DashArticleCard article={article} />
              </Col>
            );
          })
        ) : (
          <h2 className="text-center py-5">No, News right now!</h2>
        )
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}
      <Pagination pageCount={pageCount} onPress={getPage} />
    </Row>
  );
};

export default DashNewsContainer;
