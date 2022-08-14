import React from "react";
import "./Header.css";
import bell from "../../Assets/Icons/Notification Bell.svg";
import orders from "../../Assets/Icons/orders.svg";
import customer from "../../Assets/Icons/customer.svg";
import packages from "../../Assets/Icons/Package.svg";
import coupon from "../../Assets/Icons/Coupon Discount.svg";
import user from "../../Assets/Icons/user.svg";
import setting from "../../Assets/Icons/seettings.svg";


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

      <div className="sidebar">
        <div className="sidebar_icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#92929D" className="bi bi-grid icon" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>
          <img src={orders} alt="" className="icons"/>
          <img src={customer} alt=""  className="icons"/>
          <img src={packages} alt="" className="icons"/>
          <img src={coupon} alt=""  className="icons"/>
          <img src={user} alt=""  className="icons"/>
        </div>
        <div className="sidebar_setting_div">
        <img src={setting} alt="" className="sidebar_setting_icon"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
