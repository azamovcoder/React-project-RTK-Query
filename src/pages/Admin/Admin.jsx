import "./Admin.scss";

import React, { Fragment, memo, useEffect } from "react";

import { logout } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="admin container">
        <h2>Admin panel</h2>
        <div className="admin__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <div>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Admin);
