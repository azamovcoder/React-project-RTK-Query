import "./OurServices.scss";

import React, { Fragment } from "react";

import { OurServicesData } from "../../../../static";

const OurServices = () => {
  return (
    <Fragment>
      <div className="our__services container">
        {OurServicesData?.map((el) => (
          <div key={el?.id} className="our__services__frame">
            <div className="our__services__img">
              <img src={el?.img} alt="" />
            </div>
            <h3>{el?.title}</h3>
            <p>{el?.desc}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default OurServices;
