import "./Footer.scss";

import React, { Fragment } from "react";

import FootImg1 from "../../../assets/icons/f1.svg";
import FootImg2 from "../../../assets/icons/f2.svg";
import FootImg3 from "../../../assets/icons/f3.svg";
import FootImg4 from "../../../assets/icons/f4.svg";
import FooterFace from "../../../assets/icons/ff.svg";
import FooterLogo from "../../../assets/icons/Header.svg";
import FooterTwit from "../../../assets/icons/ft.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__info">
              <NavLink to={"/"}>
                <img src={FooterLogo} alt="footer.svg" />
              </NavLink>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="footer__top__item">
              <h3>Follow Us</h3>
              <p>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={FooterFace} alt="" />
                <img src={FooterTwit} alt="" />
              </div>
            </div>
            <div className="footer__top__item">
              <h3>Contact Us</h3>
              <address>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</address>
            </div>
          </div>
          <div className="footer__main">
            <div className="footer__item">
              <h3>Infomation</h3>
              <ul>
                <li>About Us</li>
                <li>Infomation </li>
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="footer__item">
              <h3>Service</h3>
              <ul>
                <li>About Us</li>
                <li>Infomation </li>
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="footer__item">
              <h3>My Account</h3>
              <ul>
                <li>About Us</li>
                <li>Infomation </li>
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="footer__item">
              <h3>My Our Offers</h3>
              <ul>
                <li>About Us</li>
                <li>Infomation </li>
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="footer__bottom__images">
              <NavLink>
                <img src={FootImg1} alt="e.svg" />
              </NavLink>{" "}
              <NavLink>
                <img src={FootImg2} alt="e.svg" />
              </NavLink>
              <NavLink>
                <img src={FootImg3} alt="e.svg" />
              </NavLink>
              <NavLink>
                <img src={FootImg4} alt="e.svg" />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
