import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FC, PropsWithChildren, useState } from "react";
const Call = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fab ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>+</button>
      <div className="menu">
        <button>
          <FontAwesomeIcon icon={faPhone} />
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faUserDoctor} />
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faPhone} />
        </button>
      </div>
    </div>
  );
};

export default Call;
