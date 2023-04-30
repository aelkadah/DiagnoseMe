import React from "react";
import { useState, useEffect } from "react";
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
          ^
        </button>
      )}
    </div>
  );
};

export default Return;
