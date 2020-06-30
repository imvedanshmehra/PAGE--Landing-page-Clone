import React, { useState } from "react";
import welcome from "../Assets/welcome.jpg";
import news from "../Assets/news.jpg";
import Brand from "../component/Brands";

const Home = () => {
  const [showBrands, setShowBrands] = useState(false);
  const [showCategory, setShowCategory] = useState(true);

  const categoryHandler = () => {
    setShowCategory(true);
    setShowBrands(false);
  };
  const brandHandler = () => {
    setShowCategory(false);
    setShowBrands(true);
  };
  return (
    <div className="row">
      <div className="col-sm m-3">
        <img src={welcome} alt="some-text" className="responsive" />
        <p className="text-secondary">
          <i>The Print Finishing Equipment Specialists.</i>
        </p>
        <p className="text-justify">
          <small>
            Printing & Graphic Equipment has successfully serviced the Irish
            Printer Market since 1997. The key to our success is our focus on
            customers and our knowledge of the technical requirements of the
            print industry, particularly as they apply to{" "}
            <b>print finishing equipment</b>. This allows us to match our
            customers’ requirements to the leading print finishing brands
            available to the Irish market. We are currently the national
            distributor for Morgana, CP Bourg and Hohner.
          </small>
        </p>
        <img alt="more-news" src={news} />
      </div>
      <div className="col-sm m-2 ">
        <button
          onClick={() => categoryHandler()}
          className={
            showCategory && showBrands === false ? "active-btn" : "inactive-btn"
          }
        >
          Browse By Category
        </button>
        <button
          onClick={() => brandHandler()}
          className={
            showBrands && showCategory === false ? "active-btn" : "inactive-btn"
          }
        >
          Browse By Brand
        </button>
        <div className="h-50 box">
          {showBrands === true && showCategory === false ? (
            <Brand />
          ) : (
            <p className="m-2">
              We don't have categories for now, click on browse with brand..
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
