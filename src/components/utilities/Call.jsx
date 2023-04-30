import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Call = () => {
  return (
    <div>
      <button className="butonn2">
        {" "}
        <a href="tel:0102101874">
          {" "}
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </button>
    </div>
  );
};

export default Call;
