import "./Products.scss";

import React, { Fragment, useState } from "react";

import Loading from "./Loading/Loading";
import ProductCard from "../productCard/ProductCard";
import { useGetProductsQuery } from "../../context/api/productApi";

const Product = () => {
  const parePage = 8;
  const [offset, setOffset] = useState(1);
  const { data, isLoading } = useGetProductsQuery({ limit: offset * parePage });

  console.log(data);
  return (
    <Fragment>
      <div className="product__cards container">
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((el) => (
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
        )}
      </div>
      {!isLoading && (
        <button
          className="see__more"
          onClick={() => setOffset((prev) => prev + 1)}
        >
          LOAD MORE
        </button>
      )}
    </Fragment>
  );
};

export default Product;
