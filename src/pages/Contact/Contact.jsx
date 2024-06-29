import "./Contact.scss";
import "react-toastify/dist/ReactToastify.css";

import React, { Fragment, memo, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const BOT__TOKEN = "7276278325:AAFTjpozX4zmxiPt4hY3Uf_Rb6eUD-sfeCk";
const CHAT__ID = "-4253735131";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `FName: ${fname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Message: ${info}`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Clear the form fields
    setFname("");
    setEmail("");
    setInfo("");

    // Show success message
    toast.success("Message sent successfully!");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="container contact">
        <div className="contact__left">
          <h2>get in touch</h2>
          <p>contact@e-comm.ng</p>
          <p>+234 4556 6665 34</p>
          <address>20 Prince Hakerem Lekki Phase 1, Lagos.</address>
        </div>
        <div className="contact__right">
          <form onSubmit={handleSendMessage} className="contact__right__form">
            <div className="contact__right__form__input">
              <label htmlFor="fname">FullName</label>
              <input
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                name="fname"
                id="fname"
              />
            </div>
            <div className="contact__right__form__input">
              <label htmlFor="email">Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__right__form__input">
              <label htmlFor="info">Message</label>
              <textarea
                required
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                name="info"
                id="info"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default memo(Contact);
