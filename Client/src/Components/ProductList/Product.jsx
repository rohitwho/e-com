import { useEffect, useState,useMemo } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart,showPage } from "../../../slice/cartSlice";
import Product from "../Products/ProductsComponent";

function MenProduct() {
  const dispatch = useDispatch();
  const pickPage = useSelector(showPage)
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get(`https://shopall-7d84df423472.herokuapp.com${pickPage}`);

        if(data.status === 200){

          setProducts(data.data);
        } else {
          window.alert("An Error Ocurred While Loading the page")

        }

   
      } catch (err) {
        console.log(err.message);
      }
    };
fetch()
  }, [pickPage]);
  const memoizedProducts = useMemo(() => products, [products]);
  return (
    <div className="ProductMain">
      {memoizedProducts?.map((list) => (
        <div key={list._id} className="Product">
           <Link to={`/Product/${list._id}`}>
          <Product
            source={`./HomePage/${list.productImages}`}
            alt={list.productName}
            
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

// https://shopall-7d84df423472.herokuapp.com