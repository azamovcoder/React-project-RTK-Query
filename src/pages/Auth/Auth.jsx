import { Navigate, Outlet } from "react-router-dom";
import React, { memo } from "react";

import { useSelector } from "react-redux";

const Auth = () => {
  const isLogin = useSelector((state) => state.auth.token);
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default memo(Auth);
