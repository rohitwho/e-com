import React, { useEffect, useState } from "react";
import Deals from "../Components/Hero/Deals";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Products from "../Components/Products/Products";

function homepage() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{

  const fetchProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setProducts(response.data);
   
      })

      .catch((error) => {
        console.error("Error fetching products:", error);
        throw error;
      });
  };
  fetchProducts();

  },[])



  return (
    <div>
      <h1>I am home page</h1>

      <section className=" grid grid-cols-5 gap-4 " >
        <h1 className=" col-span-5 text-lg">
        
          Deal of the day
        </h1>
        {products?.map((list) => (
          <div key={list.id} className=" col-span-1 flex flex-col py-4 max-w-md  shadow-black">
            <Deals
              category={list.category}
              rating={list.rating}
              description={list.description}
              image={list.image}
              title={list.title}
              price = {list.price}
            ></Deals>
            <Button className="gap - 2" color="warning">Add To Cart</Button>
            
            <Link to = {`/Product/:${list.id}`}><Button  className=" gap-2" color="primary">View</Button> </Link>
            <Products params = {list.id}></Products>
          </div>
        ))}
      </section>
    </div>
  );
}

export default homepage;
