import "./Home.scss";

import React, { Fragment } from "react";

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Hero from "./components/Hero/Hero";
import LatestNews from "./components/LastestNews/LastestNews";
import OurServices from "./components/OurServices/OurServices";
import Product from "../../components/products/Product";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import SaleProducts from "./components/SaleProducts/SaleProducts";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <SaleProducts />
      <Product />
      <ProductShowcase />
      <OurServices />
      <LatestNews />
      <FeaturedProducts />
    </Fragment>
  );
};

export default Home;
