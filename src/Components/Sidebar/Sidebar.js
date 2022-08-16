import React from "react";
import './Sidebar.css';
import orders from "../../Assets/Icons/orders.svg";
import customer from "../../Assets/Icons/customer.svg";
import packages from "../../Assets/Icons/Package.svg";
import coupon from "../../Assets/Icons/Coupon Discount.svg";
import user from "../../Assets/Icons/user.svg";
import setting from "../../Assets/Icons/seettings.svg";

function Sidebar() {
  return (

      <div className="sidebar">
        <div className="sidebar_icons">
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#92929D" className="bi bi-grid icon" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" /></svg></a>
          <a href="/"><img src={orders} alt="" className="icons" /></a>
          <a href="/Customer"><img src={customer} alt="" className="icons" /></a>
          <a href="/"><img src={packages} alt="" className="icons" /></a>
          <a href="/"><img src={coupon} alt="" className="icons" /></a>
          <a href="/"><img src={user} alt="" className="icons" /></a>
        </div>
        <div className="sidebar_setting_div">
          <img src={setting} alt="" className="sidebar_setting_icon" />
        </div>
      </div>

  );
}

export default Sidebar;
