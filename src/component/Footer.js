import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer text-white mt-5">
      <div className="row">
        <div className="col-sm ">
          <p className="m-2">
            {" "}
            Copyright Printing & Graphic Equipment Ltd.
            <br /> Web Design by:{" "}
            <a className="text-white" href="https://github.com/imvedanshmehra">
              Vedansh Mehra
            </a>
          </p>
        </div>
        <div className="col-sm text-right">
          <p className="m-2">
            Unit 3G, Centrepoint Business Park, Oak Drive, Dublin 12
            <br /> TEL: 6393315652 || FAX: 01-4097680 || EMAIL:
            vedanshofficial@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
