import React, { useState } from "react";
import "./cust.css";

function Cust() {
  const [details, setdetails] = useState([
    {
      ID: "XXX1",
      Name: "Arlene McCoy",
      Join_Date: "1 Februray 2021",
      Total_Visit: "2",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$490.51",
    },
    {
      ID: "XXX2",
      Name: "Savannah Nguyen",
      Join_Date: "3 Februray 2021",
      Total_Visit: "3",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$396.84",
    },
    {
      ID: "XXX3",
      Name: "Jacob Jones",
      Join_Date: "5 Februray 2021",
      Total_Visit: "6",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$406.27.",
    },
    {
      ID: "XXX4",
      Name: "Jerome Bell",
      Join_Date: "1 Februray 2021",
      Total_Visit: "12",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$767.50",
    },
    {
      ID: "XXX5",
      Name: "Cody Fisher",
      Join_Date: "18 Februray 2021",
      Total_Visit: "14",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$475.22",
    },
    {
      ID: "XXX6",
      Name: "Kathryn Murphy",
      Join_Date: "12 Februray 2021",
      Total_Visit: "53",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$601.13",
    },
    {
      ID: "XXX7",
      Name: "Jane Cooper",
      Join_Date: "1 Februray 2021",
      Total_Visit: "21",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$293.01",
    },
    {
      ID: "XXX8",
      Name: "Ronald Richards",
      Join_Date: "15 Februray 2021",
      Total_Visit: "31",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$948.55",
    },
    {
      ID: "XXX9",
      Name: "Theresa Webb",
      Join_Date: "21 Februray 2021",
      Total_Visit: "41",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$928.41",
    },
    {
      ID: "XXX10",
      Name: "Annette Black",
      Join_Date: "11 Februray 2021",
      Total_Visit: "6",
      Purchased_Items:
        "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
      Total_Spend: "$473.85",
    },
  ]);

  return (
    <div>
      {details.map((detail) => {
        return (
          <div className="table_details">
            <div className="pto">
              <p className="id">{detail.ID}</p>
            </div>
            <div className="namee">
              <p className="name">{detail.Name}</p>
            </div>
            <div className="jdate">
              <p className="date">{detail.Join_Date}</p>
            </div>
            <div className="visits">
              <p className="visit">{detail.Total_Visit}</p>
            </div>
            <div className="pur">
              <p className="purched_items">{detail.Purchased_Items}</p>
              <p className="purched_items_p">Sea Detail</p>
            </div>
            <div className="spd">
              <p>{detail.Total_Spend}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cust;
