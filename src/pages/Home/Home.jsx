import "./Home.scss";

import React, { Fragment, memo } from "react";

import Categories from "./components/Categories/Categories";
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
      <Categories />
      <Product />
      <ProductShowcase />
      <OurServices />
      <LatestNews />
      <FeaturedProducts />
    </Fragment>
  );
};

export default memo(Home);
