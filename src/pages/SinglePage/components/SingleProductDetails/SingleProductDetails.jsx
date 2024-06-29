import "./SingleProductDetails.scss";

import React, { Fragment, memo } from "react";

const SingleProductDetails = () => {
  return (
    <Fragment>
      <div className="single__product">
        <div className=" single__product__details container">
          <ul>
            <li>
              <h3>Product Infomation</h3>
            </li>
            <li>
              <h3>PReviews 0</h3>
            </li>
            <li>
              <h3>Another tab</h3>
            </li>
          </ul>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(SingleProductDetails);
