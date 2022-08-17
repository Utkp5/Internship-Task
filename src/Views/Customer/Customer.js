import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import search from "../../Assets/Icons/SEARCH.svg";
import threedots from "../../Assets/Icons/threedots.svg";
import filter from "../../Assets/Icons/filter.svg";

import "./Customer.css";
import Cust from "../../Components/cust_details/cust";

function Customer() {
  return (
    <div>
      <Header />
      <Sidebar />

      <h3 className="customer_h3">Customer</h3>
      <div className="customer_container">
        <div className="customer_search">
          <img src={search} alt="" className="customer_search_svg" />
          <input
            type="search"
            name=""
            id="customer_search"
            placeholder=" Search Here..."
          />
          <img src={filter} alt="" className="customer_filter_svg" />
          <img src={threedots} alt="" className="customer_dots_svg" />
        </div>
        <div className="table_heading">
          <p>ID</p>
          <p>Name</p>
          <p>Join Date</p>
          <p>Total Visit</p>
          <p>Purchased Items</p>
          <p>Total Spend</p>
        </div>
        <Cust />
      </div>
    </div>
  );
}

export default Customer;
