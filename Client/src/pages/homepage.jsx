import { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";

import { Link } from "react-router-dom";
import homepageImage from "../assets/HomePage/Homepage.png";
import Men from "../assets/HomePage/men.png";
import Women from "../assets/HomePage/women2.jpeg";
import Accessories from "../assets/HomePage/2.png";
import Flash from "../assets/HomePage/flash.png";
import Form from '../Components/FormInput/Form'
function homepage() {
  return (
    <main>
      <img
        className=" w-full object-cover transition-height max-h-min"
        src={homepageImage}
      ></img>
      <div style={{ marginInline: "2%" }}>
        <h1 className="homepage">Shop By Category</h1>

        <main style={{ backgroundColor: "rgb(204 208 214)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr  ",

              gap: "10px",
            }}
          >
            <div className="MenSection">
              <Link to="/Men's Fashion">
                <img src={Men} alt="" />
              </Link>
            </div>
            <div className="WomenSection">
              <Link to="/WomenFashion">
                <img style={{ width: "100%" }} src={Women} alt="" />
              </Link>
            </div>
          </div>
          <div className="Accessories">
            <Link to="Accessories">
              <img style={{ width: "100%" }} src={Accessories} alt="" />
            </Link>
          </div>
        </main>

        {/* <h1 className="homepage">Deal of the day</h1> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            backgroundColor: "#feb14d",
            // height:"600px",
            gap: "10px",
          }}
        >
          <div className="GridColumns">
            <img className="GridColumImage" src={Flash} alt="" />
          </div>
          <div className="GridColumns">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              sint!
            </p>
            <Link to="Deals">
              <Button>Shop</Button>
            </Link>
          </div>
        </div>

        <div style={{width:"50%"}}>
          <Form
          inputType="text"
          placeholdertext="hello"
          labelFor="FirstName"
          inputLabel="Full Name"
          in

          />
          
           <Form
          inputType="email"
          placeholdertext="hello"
          labelFor="Email"
          inputLabel="Email:"
          in

          /> <Form
          inputType="text"
          placeholdertext="hello"
          labelFor="Message"
          inputLabel="Message:"
          in

          />
          <aside style={{display:"flex",justifyContent:"flex-end"}}>  <button>Send</button></aside>
        </div>
      </div>
    </main>
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
