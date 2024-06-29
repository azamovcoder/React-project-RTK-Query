import "./CartModal.scss";

import React, { Fragment, memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { BsBank } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { PiPaypalLogoFill } from "react-icons/pi";
import { VscError } from "react-icons/vsc";
import { useGetValue } from "../../../../hooks/useGetValue";

const BOT__TOKEN = "7276278325:AAFTjpozX4zmxiPt4hY3Uf_Rb6eUD-sfeCk";
const CHAT__ID = "-4253735131";

const CarModal = ({ setModal }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `FName: ${fname} %0A`;
    text += `LName: ${lname} %0A`;
    text += `Email: ${email} %0A`;
    text += `phone: ${phone} %0A`;
    text += `Message: ${info}`;
    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    e.target.reset();
    setFname("");
    setLname("");
    setEmail("");
    setInfo("");
    setPhone("");
    setModal(false);
    toast.success("Order sent successfully!");
  };
  return (
    <Fragment>
      <div className="cart__modal">
        <div
          className="cart__modal__overlay"
          onClick={() => setModal(false)}
        ></div>
        <form
          onSubmit={handleSendMessage}
          action=""
          className="cart__modal__form"
        >
          <div className="cart__modal__form__head">
            <button>
              <FaArrowLeft color="#40BFFF" />
            </button>
            <h2>Make Payment</h2>
            <button>
              <VscError color="#40BFFF" />
            </button>
          </div>
          <div className="cart__modal__form__body">
            <div className="cart__modal__form__left">
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="FirstName"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
              <h3> Select Method of Payment</h3>
              <div className="cart__modal__form__left__radio">
                <label htmlFor="card">
                  <IoCardOutline color="#40BFFF" />
                  Credit Card Or Debit
                </label>
                <input id="card" type="radio" name="pay" />
              </div>
              <div className="cart__modal__form__left__radio">
                <label htmlFor="paypal">
                  <PiPaypalLogoFill color="#40BFFF" />
                  Paypal
                </label>
                <input id="paypal" type="radio" name="pay" />
              </div>
              <div className="cart__modal__form__left__radio">
                <label htmlFor="bank">
                  <BsBank color="#40BFFF" />
                  Bank Transfer
                </label>
                <input id="bank" type="radio" name="pay" />
              </div>
            </div>
            <div className="cart__modal__form__right">
              <input
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
              <textarea
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Mobile Phone"
              />
              <div className="cart__modal__form__bottom__pay"></div>
            </div>
          </div>
          <button className="cart__modal__form__button">Go to Payment</button>
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default memo(CarModal);
