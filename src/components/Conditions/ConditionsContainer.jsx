import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ConditionCard from "./ConditionCard";
import ConditionsHook from "../../redux/Hooks/Conditions/ConditionsHook";
import { Pagination } from "../../components";

const ConditionsContainer = () => {
  const [conditions, loading, pageCount, getPage] = ConditionsHook();

  return (
    <Row>
      {!loading ? (
        conditions?.data?.length >= 1 ? (
          conditions?.data.map((condition, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index}>
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
      <Pagination pageCount={pageCount} onPress={getPage} />
    </Row>
  );
};

export default ConditionsContainer;
