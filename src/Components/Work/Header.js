import React, {  Fragment } from "react";
import "../../CSS/Header.css";


const Header = () => {
  return (
    <Fragment>
      <LeftHeader />

      <div className="header right">
        <div className="right-information">
          </div>
      </div>
    </Fragment>
  );
};

const LeftHeader = () => (
  <div className="header left">
    <div className="left-information">
      <h1>Joel Hördegård</h1>




      <h5>  work </h5>
      <h5>  stills </h5>
      <h5>  contact </h5>
    </div>
    <h6>Director of Photography</h6>
  </div>)
;
export default Header;
