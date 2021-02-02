import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 categories-container">
        <span className="navbar-brand">Categories:</span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Shirts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Sport wears</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Outwears</Link>
            </li>
          </ul>

          <form className="form-inline">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Categories;
