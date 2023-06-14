import React from "react";
import { Container } from "react-bootstrap";
import { NewsContainer, SecTitle } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NewsPage = () => {
  return (
    <Container className="form-section">
      <SecTitle title={"News"} desc="See our latest trending news" />
      <div style={{ textAlign: "center" }}>
        <div style={{ justifyContent: "center" }} className="search-box d-flex">
          <input placeholder="serach here" type="text" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <NewsContainer />
    </Container>
  );
};

export default NewsPage;
