import React from "react";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Deals({ category, rating, price, image, title }) {
  return (
    <div className="deals">
            <p className="text-lg uppercase font-bold">{category}</p>
      <img className="productImage"  src={image} alt={title} />


      <h4 className="ProductH1">{title}</h4>
      {/* <span className="text-default-500">{` Rating ${rating.rate}`}</span> */}
      <span>{` $${price}`}</span>
    </div>
  );
}
