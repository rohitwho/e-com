import { useSelector, useDispatch } from "react-redux";
import { Badge, Button, Input } from "@nextui-org/react";
import {
  addToCart,
  removeFromCart,
  selectCount,
  selectSelectedProduct,

} from "../../../slice/cartSlice";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import EmptyCart from '../../assets/Animations/EmptyCart.json'
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();
  const emptyCart = useSelector(selectSelectedProduct);



  const [checkoutItem, setCheckoutItem] = useState([]);
  const cartItems = useSelector(selectCount)
  // if(cartItems){
  //   if(cartItems[0].quantity === undefined){
  //     return
  //   }else{
  
  //     const quantity = cartItems[0].quantity 
  //     console.log(quantity);
  //   }
  // }
 

  const calculateTaxAmount = (Cost) => Math.floor((Cost * 13) / 100);
  const totalAmount=(originalAmount,addTax)=>  Math.floor(originalAmount+addTax);


  useEffect(() => {
    setCheckoutItem(cartItems)
    
  }, [cartItems]);
  return (
    <div className="form">
    
      {emptyCart === null ? (
    <Lottie animationData={EmptyCart}></Lottie>
      ) : (
        <div className="check">
          {checkoutItem?.map((item) => (
      
            <div className="checkoutView" key={item.id}>
                    
              <img  src={item.image} alt="" loading="lazy" />
        
              <h1 >{item.title}</h1>
              <aside>
                <span> ${item.price}</span>
                <h2>Tax: ${calculateTaxAmount(item.price)}</h2>
                <h2>Total : ${totalAmount(item.price, calculateTaxAmount(item.price))}</h2>
                <div style={{display:"flex"}}>
                  <Button variant="ghost"
                  color="success"
                              className="inp"
                              onClick={() => {
                  dispatch(addToCart(item));

                              }}
                            >
                              +
                            </Button>
                            <Button
                            variant="ghost"
                            color="warning"
                              className="inp"
                              onClick={() => {
                  dispatch(removeFromCart(item));
                              }}
                            >
                              -
                            </Button>
                </div>
              </aside>
            </div>
          ))}

        </div>
      )}
        <div className="checkout">
        <h1>Checkout</h1>
        <Input
          className="inp"
          variant="bordered"
          type="number"
          label="Card Number"
          placeholder="1234 - 4567-8910-4321"
        />
        <Input
          className="inp"
          variant="bordered"
          type="text"
          label="Card Name"
          placeholder="John Smith"
        />
        <Input
          className="inp"
          variant="bordered"
          type="date"
          label="Expiry"
          placeholder="01/23"
        />
        <Input
          className="inp"
          variant="bordered"
          type="number"
          label="CVV"
          placeholder="123"
        />
        <Button className="inp" variant="ghost" color="primary">
          {" "}
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;

// 

// import { useSelector, useDispatch } from "react-redux";
// import { Button, Input } from "@nextui-org/react";
// import {
//   addToCart,
//   removeFromCart,
//   selectSelectedProduct,

// } from "../../../slice/cartSlice";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Cart() {
//   const dispatch = useDispatch();
//   const emptyCart = useSelector(selectSelectedProduct);
//   const totalCart = useSelector(selectSelectedProduct);
//   console.log(totalCart);
//   const [checkoutItem, setCheckoutItem] = useState([]);

//   const calculateTaxAmount = (Cost) => Math.floor((Cost * 13) / 100);
//   const totalAmount=(originalAmount,addTax)=>  Math.floor(originalAmount+addTax);

//   useEffect(() => {
//     const checkout = async () => {
//       try {
//         const data = await axios.get(
//           `https://fakestoreapi.com/products/${totalCart}`
//         );
//         setCheckoutItem([data.data]);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     checkout();
//   }, [totalCart]);
//   return (
//     <div className="form">
    
//       {emptyCart === null ? (
//         <h1>Your cart is empty</h1>
//       ) : (
//         <div className="check">
//           {checkoutItem?.map((item) => (
//             <div className="checkoutView" key={item.id}>
//               <img  src={item.image} alt="" loading="lazy" />
//               <h1 >{item.title}</h1>
//               <aside>
//                 <span> ${item.price}</span>
//                 <h2>Tax: ${calculateTaxAmount(item.price)}</h2>
//                 <h2>Total : ${totalAmount(item.price, calculateTaxAmount(item.price))}</h2>
//                 <div style={{display:"flex"}}>
//                   <Button variant="ghost"
//                   color="success"
//                               className="inp"
//                               onClick={() => {
//                   dispatch(addToCart());

//                               }}
//                             >
//                               +
//                             </Button>
//                             <Button
//                             variant="ghost"
//                             color="warning"
//                               className="inp"
//                               onClick={() => {
//                   dispatch(removeFromCart());
//                               }}
//                             >
//                               -
//                             </Button>
//                 </div>
//               </aside>
//             </div>
//           ))}

//         </div>
//       )}
//         <div className="checkout">
//         <h1>Checkout</h1>
//         <Input
//           className="inp"
//           variant="bordered"
//           type="number"
//           label="Card Number"
//           placeholder="1234 - 4567-8910-4321"
//         />
//         <Input
//           className="inp"
//           variant="bordered"
//           type="text"
//           label="Card Name"
//           placeholder="John Smith"
//         />
//         <Input
//           className="inp"
//           variant="bordered"
//           type="date"
//           label="Expiry"
//           placeholder="01/23"
//         />
//         <Input
//           className="inp"
//           variant="bordered"
//           type="number"
//           label="CVV"
//           placeholder="123"
//         />
//         <Button className="inp" variant="ghost" color="primary">
//           {" "}
//           Proceed To Checkout
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

