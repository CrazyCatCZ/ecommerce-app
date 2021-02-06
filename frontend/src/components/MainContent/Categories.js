import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ setCategory }) => {
  const handleOnCategoryChange = (e) => {
    const categoryName = e.target.innerHTML.toLowerCase();
    setCategory(categoryName);
  };

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
          <ul onClick={handleOnCategoryChange} className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Notebooks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Computers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Smartphones</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Tablets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Headphones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Cameras
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Categories;
