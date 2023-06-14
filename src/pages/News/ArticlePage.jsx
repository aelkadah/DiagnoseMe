import React from "react";
import { Container, Row } from "react-bootstrap";
import { DashboardHeader } from "./../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import cover from "../../images/cover.jpg";

const ArticlePage = () => {
  return (
    <Container>
      <DashboardHeader text="News / Article" url="/news" />
      <Row className="mt-3">
        <h1 className="text-noto fw-bold border-bottom border-opacity-50 pb-3">
          The title for the first article in news section for the first article
          in news section
        </h1>
        <Row className="d-flex align-items-center justify-content-between text-black-50 mb-3 mt-1 ps-3 pe-0">
          <span className="w-auto">By Ahmed</span>
          <span className="d-flex align-items-center w-auto">
            <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
            20 February, 2023
          </span>
        </Row>
      </Row>
      <Row>
        <img src={cover} />
      </Row>
      <Row className="mt-3">
        <p className="fs-5 fw-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          laboriosam consectetur praesentium fugiat doloremque deleniti cumque!
          Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente laboriosam consectetur praesentium fugiat doloremque deleniti
          cumque! Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi.
        </p>
        <p className="fs-5 fw-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          laboriosam consectetur praesentium fugiat doloremque deleniti cumque!
          Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente laboriosam consectetur praesentium fugiat doloremque deleniti
          cumque! Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente laboriosam consectetur praesentium fugiat doloremque deleniti
          cumque! Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi.
        </p>
        <p className="fs-5 fw-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          laboriosam consectetur praesentium fugiat doloremque deleniti cumque!
          Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente laboriosam consectetur praesentium fugiat doloremque deleniti
          cumque! Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente laboriosam consectetur praesentium fugiat doloremque deleniti
          cumque! Amet iste similique nulla eos mollitia magni molestias commodi
          inventore! Omnis deserunt amet animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente laboriosam consectetur
          praesentium fugiat doloremque deleniti cumque! Amet iste similique
          nulla eos mollitia magni molestias commodi inventore! Omnis deserunt
          amet animi.
        </p>
      </Row>
    </Container>
  );
};

export default ArticlePage;
