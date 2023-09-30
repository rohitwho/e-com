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
import EmptyCart from "../../assets/Animations/EmptyCart.json";

function Cart() {
  const dispatch = useDispatch();

  const emptyCart = useSelector(selectSelectedProduct);
  console.log(emptyCart);



  const [checkoutItem, setCheckoutItem] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0);

  const cartItems = useSelector(selectCount);

  const calculateTaxAmount = (Cost) => Math.floor((Cost * 13) / 100);
  const totalAmount = (originalAmount, addTax) =>
    Math.floor(originalAmount + addTax);

  useEffect(() => {
    setCheckoutItem(cartItems);
  }, [cartItems]);

  useEffect(() => {
    let newOverallTotal = 0;

    checkoutItem.forEach((item) => {
      const itemTotal = totalAmount(
        item.productPrice,
        calculateTaxAmount(item.productPrice)
      );

      if (item.quantity > 1) {
        const addQuantity = item.productPrice * (item.quantity - 1);

        newOverallTotal += itemTotal + addQuantity;
      } else {
        newOverallTotal += itemTotal;
      }
    });

   setOverallTotal(newOverallTotal);
  }, [checkoutItem]);
  return (
    <div className="form">
      {emptyCart == [] && <Lottie animationData={EmptyCart}></Lottie>}

      <div className="check">
        {checkoutItem?.map((item) => (
          <div className="checkoutView" key={item.id}>
            <img
              src={`/HomePage/${item.productImages}`}
              alt={item.productName}
              loading="lazy"
            ></img>

            <h1>{item.productName}</h1>
            <aside>
              <span> ${item.productPrice}</span>
              <h2>Tax: ${calculateTaxAmount(item.productPrice)}</h2>
              <h2>
                Total : $
                {totalAmount(
                  item.productPrice,
                  calculateTaxAmount(item.productPrice)
                )}
              </h2>
              <div style={{ display: "flex" }}>
                <Button
                  variant="ghost"
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
        <h1>
          {" "}
          Today's Total : <span className="TotalPrice">${overallTotal}</span>
        </h1>
        <Button className="inp" variant="ghost" color="primary">
          {" "}
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
