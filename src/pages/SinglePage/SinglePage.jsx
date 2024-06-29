import "./SinglePage.scss";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import React, { Fragment, memo, useEffect, useState } from "react";

import ColorSelector from "./components/ColorSelector/ColorSelector";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import SingleLoading from "./components/SingleLoading/SingleLoading";
import SingleProductDetails from "./components/SingleProductDetails/SingleProductDetails";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { Id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(Id);
  console.log(product);
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(product?.rating?.rate); i++) {
      res.push(
        <FaStar key={`full-${i}`} className="product__card__rating__star" />
      );
    }
    if (product?.rating?.rate % 1 > 0.4) {
      res.push(
        <FaRegStarHalfStroke
          key="half"
          className="product__card__rating__star"
        />
      );
    }
    for (let i = Math.round(product?.rating?.rate); i < 6; i++) {
      res.push(
        <FaRegStar key={`empty-${i}`} className="product__card__rating__star" />
      );
    }

    return res;
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <SingleLoading />
      ) : (
        <section className="single container">
          <div key={product?.id} className="single__card">
            <div className="single__card__img">
              <img src={product?.image} alt="" />
              <div className="single__card__img__images">
                <img src={product?.image} alt="" />
                <img src={product?.image} alt="" />
                <img src={product?.image} alt="" />
                <img src={product?.image} alt="" />
              </div>
            </div>
            <div className="single__card__info">
              <h2>{product?.title}</h2>
              <div className="single__card__inf">
                <span className="product__card__rating">{getRating()}</span>
                <p> 0 reviews</p>
                <a href="">Submit a review</a>
              </div>
              <div className="single__card__info__prices">
                <p className="single__card__info__prices__price">
                  ${product?.price}
                </p>
                <p className="single__card__info__prices__old__price">
                  ${(product?.price * 1.2).toFixed(2)}
                </p>
                <p className="single__card__info__prices__sale__price">
                  24% Off
                </p>
              </div>
              <div className="single__card__info__list">
                <p>Availability: In stock</p>
                <p>Category: {product?.category}</p>
                <p>Free shipping</p>
              </div>
              <div className="">
                <ColorSelector
                  colors={["blue", "red", "black", "yellow"]}
                  selectedColor={selectedColor}
                  onColorSelect={handleColorSelect}
                />
              </div>
              <div className="single__card__info__select">
                <p>Select Color:</p>
                <select>
                  <option value="XS">XS</option>
                  <option value="XL">XL</option>
                  <option value="S">S</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="single__card__info__buttons">
                <div className="single__card__info__buttons__counter">
                  <button
                    disabled={count == 1}
                    onClick={() => setCount((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    disabled={count == product?.rating?.count}
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="single__card__info__buttons__button">
                  <IoCartOutline /> Add To Cart
                </button>
                <button className="single__card__info__buttons__button">
                  <IoHeartOutline />
                </button>
              </div>
              <div className="single__card__info__socials__buttons">
                <button className="single__card__info__socials__buttons__facebook">
                  <FaFacebookF />
                  <span>Share on</span> Facebook
                </button>
                <button className="single__card__info__socials__buttons__twitter">
                  <FaTwitter />
                  <span>Share on</span> Twitter
                </button>
              </div>
            </div>
          </div>
          <div className="single__images">
            <div className="single__image">
              <img src={product?.image} alt="" />
            </div>
            <div className="single__info">
              <span className="product__card__rating">{getRating()}</span>
              <div className="single__prices">
                <p className="single__prices__price">${product?.price}</p>
                <p className="single__prices__old__price">
                  ${(product?.price * 1.2).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      <SingleProductDetails />
      <RelatedProducts />
    </Fragment>
  );
};

export default memo(SinglePage);
