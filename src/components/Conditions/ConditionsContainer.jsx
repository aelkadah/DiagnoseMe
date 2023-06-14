import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ConditionCard from "./ConditionCard";
import { Pagination } from "../../components";

const ConditionsContainer = () => {
  const loading = false;

  const conditions = [
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

  // const [conditions, loading, pageCount, getPage] = NewsHook();

  return (
    <Row>
      {!loading ? (
        conditions?.length >= 1 ? (
          conditions.map((condition, index) => {
            return (
              <Col xs={12} md={4} lg={3} key={index}>
                <ConditionCard condition={condition} />
              </Col>
            );
          })
        ) : (
          <h2 className="text-center py-5">No, conditions right now!</h2>
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

export default ConditionsContainer;
