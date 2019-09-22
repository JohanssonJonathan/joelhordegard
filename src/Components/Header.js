import React, {  Fragment } from "react";
import "../CSS/Header.css";


const Header = () => {
  return (
    <Fragment>
      <LeftHeader />

      <div className="header right">
        <div className="right-information">
          <h5>LIST VIEW</h5>
          </div>
      </div>
    </Fragment>
  );
};

const LeftHeader = () => (
  <div className="header left">
    <div className="left-information">
      <h1>JOEL HÖRDEGÅRD</h1>
      <h5> / CONTACT</h5>
    </div>
    <h6>FSF, Director of Photography</h6>
  </div>)
;
export default Header;
