import "./Login.scss";

import React, { Fragment, memo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useGetUsersQuery, useSignInMutation } from "../../context/api/userApi";

import { setToken } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { useGetValue } from "../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

let initialState = {
  username: "johnd",
  password: "m38rmF$",
};

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState);
  const [signIn, { isSuccess, data, isError }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
    console.log(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.token));
      navigate("/admin");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Username or Password is wrong. Please try again!");
    }
  }, [isError]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="login container">
        <form onSubmit={handleLogin} action="" className="login__form">
          <div className="login__form__input">
            <label htmlFor="">UserName</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              type="text"
            />
          </div>
          <div className="login__form__input">
            <label htmlFor="">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
            />
          </div>
          <button>LOGIN</button>
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default memo(Login);
