import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
const Return = () => {
  const [backtotop, setbacktotop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbacktotop(true);
      } else {
        setbacktotop(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backtotop && (
        <button className="butonn" onClick={scrollup}>
          <FontAwesomeIcon
            icon={faRocket}
            style={{ rotate: "-42deg", width: "23" }}
          />
        </button>
      )}
    </div>
  );
};

export default Return;
