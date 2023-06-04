import React from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  if (pageCount)
    if (pageCount > 1)
      return (
        <Row>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={"pagination justify-content-center gap-3 p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            disabledClassName={"disabled opacity-50"}
          />
        </Row>
      );
};

export default Pagination;
