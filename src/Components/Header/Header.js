import React from "react";
import "./Header.css";
import bell from "../../Assets/Icons/Notification Bell.svg";


function Header() {
  return (
    <div>
      <div class="header">
        <div className="header_div1">
          <div className="logo"></div>
          <h3 className="header_h3">Dazzie</h3>
        </div>
        <div className="header_div2">
          <img src={bell} alt="" className="header_bell_svg" />
          <div className="header_circle"></div>
          <div>
            <h4 className="header_h4">Sumanto</h4>
            <p className="header_p">Cashier</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Header;
