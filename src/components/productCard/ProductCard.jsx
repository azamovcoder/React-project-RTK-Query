import "./ProductCard.scss";

import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
} from "react-icons/fa6";
import React, { Fragment } from "react";

import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ProductCard = ({ image, title, rating, price, product, id }) => {
  // console.log(data);
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<FaStar className="product__card__rating__star" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<FaRegStarHalfStroke className="product__card__rating__star" />);
    }
    for (let i = Math.round(rating); i < 6; i++) {
      res.push(<FaRegStar className="product__card__rating__star" />);
    }

    return res;
  };
  let date = new Date();
  return (
    <Fragment>
      <div className="product__card">
        <div className="product__card__img">
          <img src={image} alt="" />
          <div className="product__card__buttons">
            <button>
              <FaRegHeart />
            </button>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
        <NavLink
          to={`singlePage/${id}`}
          key={rating}
          className="product__card__info"
        >
          <h4>{title}</h4>
          <span key={date} className="product__card__rating">
            {getRating()}
          </span>
          <div className="product__card__prices">
            <p className="product__card__prices__price">${price}</p>
            <p className="product__card__prices__old__price">
              ${(price * 1.2).toFixed(2)}
            </p>
            <p className="product__card__prices__sale__price">24% Off</p>
          </div>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default ProductCard;
