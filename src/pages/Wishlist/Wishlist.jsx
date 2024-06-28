import "./Wishlist.scss";

import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData);

  return (
    <Fragment>
      <div className=" product__cards container">
        {wishlistData.length ? (
          wishlistData?.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              product={el}
              title={el.title}
              image={el.image}
              rating={el.rating.rate}
              price={el.price}
            />
          ))
        ) : (
          <>
            <div className="wishlist__empty">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUar7NR52hVc6xdZ75PEqkzhZBRAzMNJ3LrxXxYKHGUwTJc8XXeS1hbl33F66HVJe95pQ&usqp=CAU"
                alt=""
              />
              <h2>You don't have any favorites yet </h2>
              <button>
                <NavLink to={"/"}>Home</NavLink>
              </button>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Wishlist;
