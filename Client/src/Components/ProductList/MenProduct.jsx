import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/cartSlice";
import Product from "../Products/ProductsComponent";

function MenProduct() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("http://localhost:3001/men'sProducts");
        setProducts(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="ProductMain">
      {products?.map((list) => (
        <div key={list._id} className="Product">
           <Link to={`/Product/${list._id}`}>
          <Product
            source={`./src/assets/HomePage/${list.productImages}`}
            productName={list.productName}
  
            price={list.productPrice}
          ></Product>
          </Link>

          <div className="mt-2">
            <Button variant="ghost" fullWidth
              onClick={() => {
                dispatch(addToCart(list));
              }}
              className="mr-2"
              color="warning"
            >
              Add To Cart
            </Button>
        
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenProduct;
