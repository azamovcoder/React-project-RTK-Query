import "./ProductShowcase.scss";

import React, { Fragment } from "react";

import ShoesImg from "../../../../assets/icons/shoes.svg";

const ProductShowcase = () => {
  return (
    <Fragment>
      <div className="product__case">
        <div className="container">
          <div className="product__case__info ">
            <h2>Adidas Men Running Sneakers</h2>
            <p>Performance and design. Taken right to the edge.</p>
            <button>SHOP NOW</button>
          </div>
          <div className="product__case__img">
            <img src={ShoesImg} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductShowcase;
