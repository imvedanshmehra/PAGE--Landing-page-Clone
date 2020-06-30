import React from "react";
import morgana from "../Assets/morgana.png";
import hohner from "../Assets/hohner.png";
import cpbourg from "../Assets/cpbourg.png";
import man from "../Assets/man.png";

const Brand = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm m-4">
          <img src={morgana} alt="morgana" className="mb-4" />
          <img src={hohner} alt="hohner" />
        </div>
        <div className="col-sm m-4 ">
          <img src={cpbourg} alt="cpbourgh" className="mb-4" />
          <img src={man} alt="man_2nd" />
        </div>
      </div>
    </div>
  );
};
export default Brand;
