import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import DashboardHeader from "./../../components/utilities/DashboardHeader";
import AddArticleHook from "../../redux/Hooks/News/AddArticleHook";

const DashNewsAddPage = () => {
  const [
    title,
    onChangeTitle,
    desc,
    onChangeDesc,
    image,
    onChangeImage,
    handleSubmit,
  ] = AddArticleHook();

  return (
    <Container>
      <DashboardHeader text="Dashboard / News / Add" />

      <Container>
        <Row className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Article Cover</Form.Label>
            <Form.Control type="file" onChange={onChangeImage} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Article Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type title here..."
              value={title}
              onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Article Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="The body of article...."
              value={desc}
              onChange={onChangeDesc}
            />
          </Form.Group>
          <Row className="d-flex justify-content-end px-0">
            <Button className="w-auto" onClick={handleSubmit}>
              Submit
            </Button>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default DashNewsAddPage;
