
import { Link } from "react-router-dom";
import homepageImage from "/HomePage/Homepage.png";
import Men from "/HomePage/men.png";
import Women from "/HomePage/women2.jpeg";
import Accessories from "/HomePage/2.jpeg";
import Flash from "/HomePage/flash.png";
import Form from "../Components/FormInput/Form";
import Details from "/HomePage/Details.png";
import Lottie from "lottie-react";
import Contact from "../assets/Animations/ContactAnimation.json";
import { useSelector,useDispatch } from "react-redux";
import {selectPage} from '../../slice/cartSlice'
function homepage() {
  const dispatch = useDispatch()
  function showList(list) {

 dispatch(selectPage(list))

    
  }
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
            <div  onClick={()=>{showList("/MenProduct")}} className="MenSection">
              <Link to="/Fashion">
                <img src={Men} alt="" />
               
              </Link>
            </div>
            <div  onClick  ={ ()=>{showList("/women'sProducts")}} className="WomenSection">
            <Link to="/Fashion">
                <img style={{ width: "100%" }} src={Women} alt="" />
                </Link>
            </div>
          </div>
          <div onClick  ={ ()=>{showList("/Accessories")}} className="Accessories">
            
            <div className="GridColumns">
            <h1 >From Me To Me</h1>
            <p className="DealsP">
           Jwelery to Give Yourself For Reaching The Personal Goals.
            </p>
            <Link className="SendButton" to="/Fashion">
            <button  style={{background:"transparent",color:"white"}}>Shop Now</button>
            </Link>

            </div>
            <div> 
              <img style={{ width: "100%" }} src={Accessories} alt="" />
          </div>
          </div>
        </main>

   
        <div className="GridContainer"
        
        >
          <div className="GridColumns">
            <img className="GridColumImage" src={Flash} alt="" />
          </div>
          <div className="GridColumns">
            <h1 >Shop latest Deals</h1>
            <p className="DealsP">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Link  className="SendButton"to="/Deals">
              <button  style={{background:"transparent",color:"white" }}>Shop Now</button>
            </Link>
          </div>
        </div>
        <div>
          <img style={{ width: "100%"}} src={Details} alt="" />
        </div>

        <div className="ContactUs">
          <aside className="ContactUSH1">
            <h1>GET IN TOUCH</h1>
          </aside>
          <section className="ContactBundle">
            <main className="ContactUSForm">
              <Form
                inputType="text"
                placeholdertext="JohnSmith"
                labelFor="FirstName"
                inputLabel="Full Name"
                in
              />
              <Form
                inputType="email"
                placeholdertext="JohnSmith@gmail.com"
                labelFor="Email"
                inputLabel="Email:"
                in
              />{" "}
              <Form
                inputType="text"
                placeholdertext=""
                labelFor="Message"
                inputLabel="Message:"
                rows="10"
                cols="50"
                in
              />
              <aside
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "2%",
                }}
              >
                {" "}
                <button style={{border: "1px solid white"}} className="SendButton">Send</button>
              </aside>
            </main>
            <aside className=" ContactImage">
              <Lottie
                className=" ContactImage"
                animationData={Contact}
              ></Lottie>
            </aside>
          </section>
        </div>
     
      </div>
    </main>
  );
}

export default homepage;

