import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { addToCart, removeFromCart } from "../../../slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  return (
    <div className="flex  justify-center align-middle border gap-2">
      <h1>Checkout</h1>
      <Button
        onClick={() => {
          dispatch(addToCart());
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(removeFromCart());
        }}
      >
        -
      </Button>
    </div>
  );
}

export default Cart;
