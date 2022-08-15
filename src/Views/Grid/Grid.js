import React from "react";
import "./Grid.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import search from "../../Assets/Icons/SEARCH.svg";

function Grid() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="container">
        <div className="search">
          <img src={search} alt="" className="grid_search_svg" />
          <input type="search" name="" id="" placeholder=" Search Here..." />
        </div>
        <div className="container_selection">
          <div className="selection_item item">All</div>
          <div className="selection_item item1">Food</div>
          <div className="selection_item item1">Drinks</div>
          <div className="selection_item item1">Snack</div>
          <div className="selection_item item1">Packages</div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
