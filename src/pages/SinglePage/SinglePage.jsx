import "./SinglePage.scss";

import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

import React from "react";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const { data: product } = useGetProductByIdQuery(Id);
  console.log(product);
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(product?.rating); i++) {
      res.push(<FaStar className="product__card__rating__star" />);
    }
    if (product?.rating % 1 > 0.4) {
      res.push(<FaRegStarHalfStroke className="product__card__rating__star" />);
    }
    for (let i = Math.round(product?.rating); i < 6; i++) {
      res.push(<FaRegStar className="product__card__rating__star" />);
    }

    return res;
  };
  return (
    <div>
      <section className="single container">
        <div key={product?.id} className="single__card">
          <div className="single__card__img">
            <img src={product?.image} alt="" />
          </div>
          <div className="single__card__info">
            <h1 style={{ fontSize: "30px" }}>{product?.title}</h1>
            <p>Category : {product?.category}</p>
            <p>Price : {product?.price}$</p>
            <span className="product__card__rating">{getRating()}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
