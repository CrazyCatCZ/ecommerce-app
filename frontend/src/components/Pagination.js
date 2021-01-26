import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item ">
            <Link className="page-link" to="/" aria-disabled="true">
              Previous
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-item page-link" to="/">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
