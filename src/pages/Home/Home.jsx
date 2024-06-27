import "./Home.scss";

import React, { Fragment } from "react";

import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/OurServices";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import SaleProducts from "./components/SaleProducts/SaleProducts";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <SaleProducts />
      <ProductShowcase />
      <OurServices />
    </Fragment>
  );
};

export default Home;
