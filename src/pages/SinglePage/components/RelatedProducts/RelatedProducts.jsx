import "./RelatedProducts.scss";

import React, { Fragment, memo } from "react";

import ProductCard from "../../../../components/productCard/ProductCard";
import { useGetProductsQuery } from "../../../../context/api/productApi";

const RelatedProducts = () => {
  const { data } = useGetProductsQuery({ limit: 4 });
  console.log(data);
  return (
    <Fragment>
      <div className=" related__products container">
        <h2>RELATED PRODUCTS</h2>
        <div className="product__cards container">
          {data?.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              product={el}
              title={el.title}
              image={el.image}
              rating={el.rating.rate}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(RelatedProducts);
