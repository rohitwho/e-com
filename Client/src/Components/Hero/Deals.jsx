import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Deals({category,rating,price,image,title}) {
  return (
  
        <Card className="   py-4" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-lg uppercase font-bold">{category}</p>
            <span className="text-default-500">{` Rating ${rating.rate}`}</span>
            <h4 className="font-bold text-large">{title}</h4>
            <span>{` $${price}`}</span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image}
              width={270}
            />
          </CardBody>
        </Card>

  );
}