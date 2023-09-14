import React from 'react';
import { useEffect, useState } from "react";
import Deals from "../Deals";
import axios from "axios";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addToCart, setSelectedProduct } from "../../../../slice/cartSlice";
import { Link } from "react-router-dom";

function DealsPage() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
  
  
    useEffect(() => {
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
    }, []);
  
  
    function handleCart(list) {
      dispatch(addToCart(list));
      dispatch(setSelectedProduct(list.id));
    }
  return (
    <section className="HomeView">
    {products?.map((list) => (
      <div key={list.id} className="HomeviewCard">
        <Link to={`/Product/${list.id}`}>
          {" "}
          <Deals
            category={list.category}
            rating={list.rating}
            description={list.description}
            image={list.image}
            title={list.title}
            price={list.price}
          ></Deals>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            className="inp"
            onClick={() => handleCart(list)}
            color="warning"
          >
            Add To Cart
          </Button>
          <Link to={`/Product/${list.id}`}>
            <Button className="gap-2" color="primary">
              View
            </Button>
          </Link>
        </div>
      </div>
    ))}

  </section>
  )
}

export default DealsPage
