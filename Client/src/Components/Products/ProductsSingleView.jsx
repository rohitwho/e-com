import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addToCart, setSelectedProduct } from "../../../slice/cartSlice";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

function Products() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [externalApi, setExternalApi] = useState({});

  const reviews = [
    { id: 1, stars: 4, comment: "greatProduct", user: "johnSmith" },
    { id: 2, stars: 5, comment: "Soft Fabric Like Feather", user: "janeDoe" },
    { id: 3, stars: 3, comment: "greatProduct", user: "johnSmith" },
    { id: 4, stars: 4, comment: "greatProduct", user: "johnSmith" },
    { id: 5, stars: 2, comment: "greatProduct", user: "johnSmith" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchById = async () => {
      try {
        const fetchSingleProduct = await axios.get(
          `http://localhost:3001/MenProduct/${id}`
        );
        if (!fetchSingleProduct) {
          return;
        }
        setSingleProduct(fetchSingleProduct.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchById();
  }, [id]);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setExternalApi(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleProduct();
  }, [id]);
  return (
    <section>
      {singleProduct ? (
 <main>
 <div className="ProductSingleViewCard">
   <img className="SingleViewImage" src={`/src/assets/HomePage/${singleProduct.productImages}`}></img>
   <div key={singleProduct._id}>
     <h2 className=" SingleViewCategory ">{singleProduct.productName}</h2>

       <>
         {" "}
         <p style={{padding:"2%"}}>Sizes:</p>
         <div className="ButtonGroup">
           <ButtonGroup variant="ghost" color="primary">
             <Button value="XS">XS</Button>
             <Button value="M">M</Button>
             <Button value="L">L</Button>
             <Button value="XL">Xl</Button>
           </ButtonGroup>
         </div>
       </>


     <h2>Product Description:</h2>
     <p className="SingleViewDescription">
       {" "}
       {singleProduct.productDescription}{" "}
     </p>
     <span style={{padding:"2%"}}>${singleProduct.productPrice}</span>

     <div
       style={{
         padding: "2%",
         margin: "2%",

         display: "flex",
         justifyContent: "space-around",
       }}
     >
       <Button
         fullWidth
         variant="ghost"
         onClick={() => {
           dispatch(addToCart(singleProduct));
           dispatch(setSelectedProduct(singleProduct._id));
         }}
         color="warning"
       >
         Add To Cart
       </Button>
     </div>
   </div>
 </div>

 <main className="ReviewBundle">
   <div className="ReviewContainer">
     <h2> Customer Reviews:{reviews.length}</h2>
     {reviews?.map((review) => (
       <aside key={review.id} className="ReviewArticle">
         <Reviews
           Rating={singleProduct.productRating}
           Review={review.comment}
           Name={review.user}
           PostedAt={Date.now()}
         ></Reviews>
       </aside>
     ))}
   </div>
   <div className="AddToBagFullWidth">
     <h2 className=" SingleViewCategory ">{singleProduct.productName}</h2>
     <img
       className="ScrollingCardImage"
       src={`/src/assets/HomePage/${singleProduct.productImages}`}
       alt=""
       loading="lazy"
     />

     <Button
       fullWidth
       variant="ghost"
       onClick={() => {
         dispatch(addToCart(singleProduct));
         dispatch(setSelectedProduct(singleProduct._id));
       }}
       color="warning"
     >
       Add To Cart
     </Button>
   </div>
 </main>
</main>
      ) : (
        <main>
          <div className="ProductSingleViewCard">
            <img className="SingleViewImage" src={externalApi.image}></img>
            <div key={externalApi.id}>
              <h2 className=" SingleViewCategory ">{externalApi.title}</h2>

              {externalApi.category === "men's clothing" ||
              externalApi.category === "women's clothing" ? (
                <>
                  {" "}
                  <p style={{padding:"2%"}}>Sizes:</p>
                  <div className="ButtonGroup">
                    <ButtonGroup variant="ghost" color="primary">
                      <Button value="XS">XS</Button>
                      <Button value="M">M</Button>
                      <Button value="L">L</Button>
                      <Button value="XL">Xl</Button>
                    </ButtonGroup>
                  </div>
                </>
              ) : null}

              <h2 style={{padding:"2%"}}>Product Description:</h2>
              <p className="SingleViewDescription">
                {" "}
                {externalApi.description}{" "}
              </p>
              <span style={{padding:"2%"}}>${externalApi.price}</span>

              <div
                style={{
                  padding: "2%",
                  margin: "2%",

                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  fullWidth
                  variant="ghost"
                  onClick={() => {
                    dispatch(addToCart(externalApi));
                    dispatch(setSelectedProduct(externalApi.id));
                  }}
                  color="warning"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>

          <main className="ReviewBundle">
            <div className="ReviewContainer">
              <h2> Customer Reviews:{reviews.length}</h2>
              {reviews?.map((review) => (
                <aside key={review.id} className="ReviewArticle">
                  <Reviews
                    Rating={review.stars}
                    Review={review.comment}
                    Name={review.user}
                    PostedAt={Date.now()}
                  ></Reviews>
                </aside>
              ))}
            </div>
            <div className="AddToBagFullWidth">
              <h2 className=" SingleViewCategory ">{externalApi.title}</h2>
              <img
                className="ScrollingCardImage"
                src={externalApi.image}
                alt=""
              />

              <Button
                fullWidth
                variant="ghost"
                onClick={() => {
                  dispatch(addToCart(externalApi));
                  dispatch(setSelectedProduct(externalApi.id));
                }}
                color="warning"
              >
                Add To Cart
              </Button>
            </div>
          </main>
        </main>
      )}
    </section>
  );
}

export default Products;


// src={`./src/assets/HomePage/${singleProduct.productImages}`}