import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import Pagination from "./../utilities/Pagination";

const NewsContainer = () => {
  const loading = false;

  const news = [
    {
      title: "First Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At a amet cum excepturi quae dolorem facilis laboriosam soluta repellat non! Et quidem dolorum, possimus est excepturi asperiores id maiores eum?",
      date: "February 05,2023",
    },
    {
      title: "First Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At a amet cum excepturi quae dolorem facilis laboriosam soluta repellat non! Et quidem dolorum, possimus est excepturi asperiores id maiores eum?",
      date: "February 05,2023",
    },
    {
      title: "First Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At a amet cum excepturi quae dolorem facilis laboriosam soluta repellat non! Et quidem dolorum, possimus est excepturi asperiores id maiores eum?",
      date: "February 05,2023",
    },
    {
      title: "First Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At a amet cum excepturi quae dolorem facilis laboriosam soluta repellat non! Et quidem dolorum, possimus est excepturi asperiores id maiores eum?",
      date: "February 05,2023",
    },
  ];

  // const [news, loading, pageCount, getPage] = NewsHook();

  return (
    <Row>
      {!loading ? (
        news?.length >= 1 ? (
          news.map((article, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index}>
                <ArticleCard article={article} />
              </Col>
            );
          })
        ) : (
          <h2 className="text-center py-5">No, news right now!</h2>
        )
      ) : (
        <Container className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}
      {/* <Pagination pageCount={pageCount} onPress={getPage} /> */}
    </Row>
  );
};

export default NewsContainer;
