import "./LatestNews.scss";

import React, { Fragment } from "react";

import { LatestNewsData } from "../../../../static";

const LatestNews = () => {
  return (
    <Fragment>
      <div className="latest__news">
        <h2>LATEST NEWS</h2>
        {LatestNewsData?.map((el) => (
          <div className="latest__news__frame">
            <div className="latest__news__frame__img">
              <img src={el.img} alt="logo.svg" />
            </div>
            <div className="latest__news__frame__info">
              <p>{el?.date}</p>
              <h3>{el?.title}</h3>
              <p>{el?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default LatestNews;
