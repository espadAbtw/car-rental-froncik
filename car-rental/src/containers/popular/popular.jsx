import React from "react";
import "./popular.css";
import PopularFeature from "../../components/popularfeature/popularfeature";
import { stockCars } from "../../data";

function popular() {
  return (
    <div className="cr_popular section__margin" id="popular">
      <div className="cr_popular-title">
        <h1>Most popular car rental deals</h1>
      </div>
      <div className="cr_popular-text">
        <p>
          There are many variations of passsages of Lorem Ipsum available but
          the majority have{" "}
        </p>
        <p className="p2">
          suffered alteration in some form by injected humour
        </p>
      </div>
      <div className="cr_popular-feature">
        {stockCars.map((data) => (
          <PopularFeature data={data} />
        ))}
      </div>
    </div>
  );
}

export default popular;
