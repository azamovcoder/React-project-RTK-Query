import "./Header.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import React, { Fragment, useEffect, useState } from "react";

import { FaBars } from "react-icons/fa6";
import HeaderImg from "../../../assets/icons/Header.svg";
import { MdOutlineMoreVert } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let wishlistCount = useSelector((state) => state.wishlist.value).length;
  let CartCount = useSelector((state) => state.cart.value).length;
  const isLogin = useSelector((state) => state.auth.token);
  return (
    <Fragment>
      <div className="header container">
        <div className="header__top">
          <div className="header__selects">
            <select name="" id="">
              <option value="ENG">ENG</option>
              <option value="UZB">UZB</option>
              <option value="RUS">RUS</option>
            </select>
            <select name="" id="">
              <option value="USD">USD</option>
              <option value="SUM">SUM</option>
              <option value="RUB">RUB</option>
            </select>
          </div>
          <div className="header__info">
            <div className="header__info__list">
              <NavLink to={"/"} className="header__info__list__home">
                <IoHomeOutline />
              </NavLink>
              <NavLink to={"admin"}>
                <IoPersonOutline />
              </NavLink>
              <NavLink to={"wishlist"}>
                <IoHeartOutline />
                {wishlistCount ? <sup>{wishlistCount}</sup> : <></>}
              </NavLink>
              <NavLink to={"cart"}>
                {CartCount ? <sup>{CartCount}</sup> : <></>}
                <IoCartOutline />
              </NavLink>
            </div>
            <div className="header__input">
              <input type="text" placeholder="$0.00" />
              <IoSearchOutline className="header__input__search" />
            </div>
            <MdOutlineMoreVert className="header__input__more" />
          </div>
        </div>
      </div>
      <header className={`header ${shrink ? "shrink" : ""}`}>
        {show ? (
          <div onClick={() => setShow(!show)} className="overlay"></div>
        ) : (
          <></>
        )}
        <div className="header__main container">
          <div className="header__main__logo">
            <NavLink to={"/"}>
              <img src={HeaderImg} alt="" />
            </NavLink>
          </div>
          <ul className={`header__main__list ${show ? "list__show" : ""} `}>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink>BAGS</NavLink>
            </li>
            <li>
              <NavLink>SNEAKERS</NavLink>
            </li>
            <li>
              <NavLink>BELT</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>CONTACT</NavLink>
            </li>
          </ul>
          <button onClick={() => setShow(!show)} className="header__bar">
            <FaBars />
          </button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
