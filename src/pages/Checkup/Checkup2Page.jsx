import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Spinner,
  ProgressBar,
} from "react-bootstrap";
import { SecTitle } from "../../components";
import image from "../../images/landing.svg";
import CheckupHook from "../../redux/Hooks/Checkup/CheckupHook";
import AllSymptomsHook from "./../../redux/Hooks/Checkup/AllSymptomsHook";

const Checkup2Page = () => {
  const [symptoms] = AllSymptomsHook();
  let selected = [];
  const [show, predicted, loading, handleSelect, handleSubmit, handleDone] =
    CheckupHook(selected);

  return (
    <Container>
      <SecTitle title="Checkup" desc="Feel free to start your checkup" />

      <Row className="mt-4">
        <Col xs={12} md={5}>
          <img src={image} alt="aa" />
        </Col>
        <Col xs={12} md={7}>
          <Row className="my-3">
            <h5 className="text-center">
              Please Select the symptoms you suffer from
            </h5>
          </Row>
          <div className="bg-light p-4 rounded-3">
            <Form>
              <Row>
                {symptoms && symptoms.status == 200 && symptoms.data.length >= 1
                  ? symptoms?.data?.map((item, index) => (
                      <Col xs={6} key={index}>
                        <Form.Check
                          className="bg-white rounded-3 py-3 px-5 my-2"
                          type="checkbox"
                          label={`${item.name}`}
                          id={`${item.id}`}
                          onClick={handleSelect}
                        />
                      </Col>
                    ))
                  : null}
              </Row>
            </Form>
          </div>
          <Row className="my-3">
            <Col className="d-flex justify-content-end">
              <Button onClick={handleSubmit} className="w-100 rounded-2">
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Body className="pt-5">
          {!loading ? (
            predicted && predicted?.status == 200 ? (
              predicted?.data?.data?.map((item, index) => {
                if (item?.score != 0)
                  return (
                    <Row
                      className="bg-light mx-2 py-3 px-3 mb-3 rounded-3"
                      key={index}
                    >
                      <h5 className="text-primary w-auto my-0 px-0 me-2 ms-0 mb-2">
                        {item?.condition}
                      </h5>
                      <Row className="d-flex align-items-center">
                        <h6 className="text-black-50 px-0 w-auto mt-1 me-2 ms-0">
                          Score: {item?.score}
                        </h6>
                        <ProgressBar
                          className="rounded-2 p-0 w-50 flex-grow-1 h-75"
                          now={item?.score}
                          label={`${item?.score}%`}
                          animated
                        />
                      </Row>
                      {item?.condition == "AlZheimer" ? (
                        <h6 className="text-black-50 px-0 w-100 me-2 ms-0">
                          <span className="flex-grow-1 me-2 ms-0">
                            Hint: Make MRI and check it for free
                          </span>
                          <Link to="/checkup/alzheimer">Check it</Link>
                        </h6>
                      ) : null}
                      {item?.condition == "Diabetes" ? (
                        <h6 className="text-black-50 px-0 w-100 me-2 ms-0">
                          <span className="flex-grow-1 me-2 ms-0">
                            Hint: Make A1C and check it for free
                          </span>
                          <Link to="/checkup/diabetes">Check it</Link>
                        </h6>
                      ) : null}
                    </Row>
                  );
              })
            ) : (
              <h2>Something went wrong</h2>
            )
          ) : (
            <Container className="text-center py-4">
              <Spinner animation="border" variant="primary" />
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100 mx-5">
            <Col className="w-100">
              <Button className="w-100 rounded-3" onClick={handleDone}>
                Done
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkup2Page;
