import React from "react";

const Categories = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 categories-container">
        <span class="navbar-brand">Categories:</span>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                All
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shirts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sport wears
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Outwears
              </a>
            </li>
          </ul>

          <form class="form-inline">
            <div class="md-form my-0">
              <input
                class="form-control mr-sm-2"
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
