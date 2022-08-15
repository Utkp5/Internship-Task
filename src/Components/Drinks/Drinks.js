import React, { useState } from 'react'
import './Drinks.css';

function Drinks() {

    const [Drink,setDrink] = useState([
        {
            name: "Amazake",
            price: "$22",
        },
        {
            name: "Royal Milk Tea",
            price: "$22",
        },
        {
            name: "Flavored Soymilk Drinks",
            price: "$22",
        },
    ]);

  return (
    <div>
      <h3 className='drinks_h3'>Drinks</h3>
      <div className="drinks_main">
        {
            Drink.map((drinks) => {
                return (
                  <div className="card">
                    <div className="card_img"></div>
                    <div className="drinks_info">
                      <p className="drinks_info_p1">{drinks.name}</p>
                      <p className="drinks_info_p2">{drinks.price}</p>
                    </div>
                  </div>
                );
            })
        }
      </div>
    </div>
  )
}

export default Drinks
