import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div>
      <div className="footer-copyright py-3">
        © 2019 Copyright:
        <a
          href="https://mdbootstrap.com/education/bootstrap/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          MDBootstrap.com{" "}
        </a>
      </div>
    </div>
  );
};

export default Copyright;
