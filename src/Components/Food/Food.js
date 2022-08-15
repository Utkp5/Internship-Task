import React, { useState } from "react";
import "./Food.css";



function Food() {
    const [Food, setFood] = useState([
        {
          name: "Sashimi",
          price: "$22",
        },
        {
          name: "Unagi - Grilled Eel",
          price: "$22",
        },
        {
          name: "Soba - Buckwheat Noodles",
          price: "$22",
        },
        {
          name: "Onigiri - Rice Balls",
          price: "$22",
        },
        {
          name: "Yakitori - Grilled Chicken",
          price: "$22",
        },
        {
          name: "Miso Soup",
          price: "$22",
        },
      ]);

  return (
    <div>
      <h3 className="food_h3">Food</h3>
      <div className="main">
        {
            Food.map((dish) => {
                return (
                  <div className="card">
                    <div className="card_img"></div>
                    <div className="food_info">
                      <p className="food_info_p1">{dish.name}</p>
                      <p className="food_info_p2">{dish.price}</p>
                    </div>
                  </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default Food;
