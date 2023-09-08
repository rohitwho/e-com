import React, { useEffect, useState } from "react";
import Deals from "../Components/Hero/Deals";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../../slice/cartSlice'
import { Link } from "react-router-dom";
import Products from "../Components/Products/Products";
import homepageImage from '../assets/HomePage/main.jpeg'

function homepage() {
  const dispatch = useDispatch();
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
<img src = {homepageImage}></img>



<div><h1>Shop By Category</h1>

<div className=" h-16 w-16 bg-black"></div>
<Link to = "/Men's Fashion">Men's Fashion</Link>



</div>


  
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <h1 className="col-span-3 text-lg">Deal of the day</h1>
        {products?.map((list) => (
          <div key={list.id} className="flex flex-col py-3 max-w-sm shadow-black">
            <Deals
              category={list.category}
              rating={list.rating}
              description={list.description}
              image={list.image}
              title={list.title}
              price={list.price}
            ></Deals>
            <Button onClick={() => { dispatch(addToCart()) }} className="gap-2" color="warning">Add To Cart</Button>
            <Link to={`/Product/:${list.id}`}><Button className="gap-2" color="primary">View</Button></Link>
            <Products params={list.id}></Products>
          </div>
        ))}
      </section>
    </div>
  );
}

export default homepage;
