import { useEffect, useState } from "react";
import Deals from "../Components/Hero/Deals";
import axios from "axios";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addToCart, setSelectedProduct } from "../../slice/cartSlice";
import { Link } from "react-router-dom";
import homepageImage from "../assets/HomePage/Homepage.png";

function homepage() {
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

  const category = [
    {
      id: 1,
      categoryName: "Men",
      link: "/Men's Fashion",
      image: homepageImage,
      alt: "A Picture of a Male Model",
    },
    {
      id: 2,
      categoryName: "Women",
      link: "/WomenFashion",
      image: homepageImage,
      alt: "A Picture of a Male Model",
    },
    {
      id: 3,
      categoryName: "Kid's",
      link: "/Men's Fashion",
      image: homepageImage,
      alt: "A Picture of a Male Model",
    },
    {
      id: 4,
      categoryName: "Gadgets",
      link: "/Men's Fashion",
      image: homepageImage,
      alt: "A Picture of a Male Model",
    },
  ];

  return (
    <div>
      <img
        className=" w-full object-cover transition-height max-h-min"
        src={homepageImage}
      ></img>

      <h1 className="homepage">Shop Latest Fashion By Category</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr ",
          margin: "2%",
          gap:"10px"
        }}
      >
        <div className="WomenSection">

        </div>
        <div className="MenSection">
        <Link to = "/Men's Fashion"><Button>Shop</Button></Link>  
        </div>
        

   
      </div>
      <div className="KidSection"></div>

      <h1 className="homepage">Deal of the day</h1>
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
    </div>
  );
}

export default homepage;


// {category?.map((home) => (
//   <div key={home.id} style={{ marginInline: "2%" }}>
//     <img className="productImage" src={home.image} alt="" />
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         width: "100%",
//         padding: "2%",
//       }}
//     >
//       <h1 style={{ fontSize: "1.5rem", textEmphasis: "ActiveBorder" }}>
//         {" "}
//         {home.categoryName}
//       </h1>
//       <Link style={{ width: "100%" }} to={home.link}>
//         <Button fullWidth variant="ghost" color="primary" size="lg">
//           Shop
//         </Button>
//       </Link>
//     </div>
//   </div>
// ))}