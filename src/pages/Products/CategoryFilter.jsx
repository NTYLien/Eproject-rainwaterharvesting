import "./CategoryFilter.css";

function CategoryFilter({ handleChange }) {
  return (
    <div className="category-filter">
      <div className="sidebar">
        <nav className="text">
          <div className="filter-box">
            <p className="property-btn bussiness-type">
              {" "}
              Property
              <span className="fa-solid fa-caret-down"></span>
            </p>

            <div className="property-show">
              <li>
                All
                <input
                  onChange={handleChange}
                  type="radio"
                  value=""
                  name="type"
                />
              </li>
              <li>
                Commercial
                <input
                  onChange={handleChange}
                  type="radio"
                  value="commercial"
                  name="type"
                />
              </li>
              <li>
                Residential
                <input
                  type="radio"
                  value="residential"
                  onChange={handleChange}
                  name="type"
                />
              </li>
            </div>
          </div>
          <div className="filter-box">
            <p className="product-type-btn bussiness-type">
              Product Types
              <span className="fa-solid fa-caret-down"> </span>
            </p>

            <div className="product-type-show">
              <li>
                All
                <input
                  onChange={handleChange}
                  type="radio"
                  value=""
                  name="category"
                />
              </li>

              <li>
                Tanks
                <input
                  type="radio"
                  value="tank"
                  onChange={handleChange}
                  name="category"
                />
              </li>
              <li>
                Pumps
                <input
                  type="radio"
                  value="pump"
                  onChange={handleChange}
                  name="category"
                />
              </li>
              <li>
                Filter
                <input
                  type="radio"
                  value="filter"
                  onChange={handleChange}
                  name="category"
                />
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CategoryFilter;
