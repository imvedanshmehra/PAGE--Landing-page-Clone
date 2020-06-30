import React from "react";
import header from "../Assets/header.jpg";

const Header = () => {
  return (
    <div className="header">
      <img
        src={header}
        alt="header-img"
        className="img-fluid mx-auto d-block header-img"
      />
    </div>
  );
};
export default Header;
