import "./FeaturedProducts.scss";

import React, { Fragment } from "react";

import { FeaturedProductsData } from "../../../../static";

const FeaturedProducts = () => {
  return (
    <Fragment>
      <div className=" featured__products container">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured__products__frames">
          {FeaturedProductsData?.map((el) => (
            <div key={el?.id} className="featured__products__frame">
              <div className="featured__products__frame__img">
                <img src={el.img} alt="shoes.png" />
              </div>
              <div className="featured__products__frame__info">
                <h3>{el?.title}</h3>
                <img src={el?.ratingImg} alt="rating.svg" />
                <div className="featured__products__frame__prices">
                  <p className="featured__products__frame__price">
                    ${el?.price}
                  </p>
                  <p className="featured__products__frame__old__price">
                    ${el?.oldPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="featured__products__search container">
        <input type="text" placeholder="Search query..." />
        <button>Search</button>
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
