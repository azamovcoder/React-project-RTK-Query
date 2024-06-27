import "./LatestNews.scss";

import React, { Fragment } from "react";

import { LatestNewsData } from "../../../../static";

const LatestNews = () => {
  return (
    <Fragment>
      <div className="latest__news container">
        <h2>LATEST NEWS</h2>
        <div className="latest__news__frames">
          {LatestNewsData?.map((el) => (
            <div key={el?.id} className="latest__news__frame">
              <div className="latest__news__frame__img">
                <img src={el.img} alt="logo.svg" />
              </div>
              <div className="latest__news__frame__info">
                <p className="latest__news__frame__date">{el?.date}</p>
                <h3 className="latest__news__frame__title">{el?.title}</h3>
                <p className="latest__news__frame__desc">{el?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LatestNews;
