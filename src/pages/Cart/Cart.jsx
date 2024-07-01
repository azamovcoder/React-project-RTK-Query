import "./Cart.scss";

import React, { Fragment, memo, useEffect, useState } from "react";
import {
  addToCart,
  decrementCart,
  deleteAllCart,
  remove,
} from "../../context/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import ModuleCart from "./ModuleCart/ModuleCart";
import { NavLink } from "react-router-dom";
import { VscError } from "react-icons/vsc";

const Cart = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [coupon, setCoupon] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modal, setModal] = useState(false);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);

  const handleAmount = (e) => {
    e.preventDefault();
    if (value === "Laylo") {
      setCoupon((totalPrice + totalPrice * 0.02) * 0.2);
    } else {
      alert("Promocode error");
    }
  };
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="container product__carts">
        {cartData.length ? (
          <>
            <div className="product__carts__titles">
              <h3>PRODUCT</h3>
              <ul>
                <li>
                  <h3>PRICE</h3>
                </li>
                <li>
                  <h3>QTY</h3>
                </li>
                <li>
                  <h3>UNIT PRICE</h3>
                </li>
              </ul>
            </div>
            {cartData.map((el) => (
              <div key={el?.id} className="product__carts__cart">
                <div className="product__carts__cart__left">
                  <button
                    className="product__carts__cart__remove__btn"
                    onClick={() => dispatch(remove(el))}
                  >
                    <VscError />
                  </button>

                  <div className="product__carts__cart__img">
                    <img src={el?.image} alt="" />
                  </div>
                  <h3>{el?.title}</h3>
                </div>
                <div className="product__carts__cart__right">
                  <p>${el?.price}</p>
                  <div className="product__carts__cart__counter__btn">
                    <button
                      disabled={el.quantity <= 1}
                      onClick={() => dispatch(decrementCart(el))}
                    >
                      -
                    </button>
                    <span>{el?.quantity}</span>
                    <button onClick={() => dispatch(addToCart(el))}>+</button>
                  </div>
                  <p className="product__carts__cart__all__price"></p>
                </div>
              </div>
            ))}
            <div className="product__carts__total">
              <div className="product__carts__total__left">
                <form
                  onSubmit={handleAmount}
                  className="product__carts__total__left__input"
                >
                  <input
                    type="text"
                    placeholder="Voucher code"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">Redeem</button>
                </form>
              </div>
              <div className="product__carts__total__all">
                <div className="product__carts__total__item">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="product__carts__total__item">
                  <p>Shipping fee</p>
                  <p>${coupon.toFixed(2)}</p>
                </div>
                <div className="product__carts__total__item">
                  <p>Coupon</p>
                  {coupon ? <p>yes</p> : <p>no</p>}
                </div>
                <div className="product__carts__total__item">
                  <h3>Total:</h3>
                  <p>${(totalPrice - coupon).toFixed(2)}</p>
                </div>
                <button
                  className="product__carts__total__item__button"
                  onClick={() => setModal(true)}
                >
                  Check out
                </button>
              </div>
            </div>
            {modal ? (
              <ModuleCart
                totalPrice={totalPrice}
                data={cartData}
                setModal={setModal}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <div className="wishlist__empty">
            <img
              src="https://getillustrations.b-cdn.net//packs/essential-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20shopping%20cart,%20cart,%20empty,%20not%20found,%20basket,%20shop_demo.png"
              alt=""
            />
            <h2>You don't have any Cart yet</h2>
            <button>
              <NavLink to={"/"}>Home</NavLink>
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default memo(Cart);
