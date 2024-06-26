import "./SaleProducts.scss";

import React, { Fragment } from "react";

import { SaleProductData } from "../../../../static";

const SaleProducts = () => {
  return (
    <Fragment>
      <div className="sale__products container">
        <div className="sale__products__frames">
          {SaleProductData?.map((product) => (
            <div
              key={product?.id}
              style={{
                backgroundImage: `url(${product.backImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="sale__products__frame"
            >
              <h3>{product?.title}</h3>
              <div className="sale__products__frame__price">
                <div className="sale__products__frame__oldPrice__all">
                  <p className="sale__products__frame__oldPrice">
                    {product?.oldPrice}$
                  </p>
                  <span>24% Off</span>
                </div>
                <p className="sale__products__frame__sale__price">
                  {product?.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SaleProducts;
