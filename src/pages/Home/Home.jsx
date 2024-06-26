import "./Home.scss";

import React, { Fragment } from "react";

import Hero from "./components/Hero/Hero";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import SaleProducts from "./components/SaleProducts/SaleProducts";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <SaleProducts />
      <ProductShowcase />
    </Fragment>
  );
};

export default Home;
