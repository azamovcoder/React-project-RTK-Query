import "./App.css";

import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import { Fragment } from "react";
import Home from "./pages/Home/Home";
import Layout from "./components/layout";
import Login from "./pages/Login/Login";
import SinglePage from "./pages/SinglePage/SinglePage";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="singlePage" element={<SinglePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
