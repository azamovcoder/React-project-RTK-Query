import "./SinglePage";

import React from "react";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();
  const { data: product } = useGetProductByIdQuery(Id);
  console.log(product);
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
            <button className="product__card__like__btn">like</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
