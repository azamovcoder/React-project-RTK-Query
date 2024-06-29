import "./Categories.scss";

import React, { Fragment } from "react";

const Categories = () => {
  return (
    <Fragment>
      <div className="categories container">
        <h2>BEST SELLER</h2>
        <ul>
          <li>All</li>
          <li>Bags</li>
          <li>Sneakers</li>
          <li>Belt</li>
          <li>Sunglasses</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Categories;
