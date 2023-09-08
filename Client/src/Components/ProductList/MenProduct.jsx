import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Button} from '@nextui-org/react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../../../slice/cartSlice'

function MenProduct() {
  const dispatch = useDispatch()
  const [products,setProducts]=useState([])
  console.log(products);



    useEffect(()=>{
        const fetch = async ()=> {
            try{
              const data =  await axios.get("http://localhost:3001/men'sProducts")
              setProducts(data.data );
            }catch(err){
              console.log(err);
            }
        
        
          }
          fetch()

    },[])
 
    return (
      <div className="grid grid-cols-3 gap-4">
        {products?.map((list) => (
          <div key={list._id} className="border p-4">
            <h1 className="text-lg font-semibold">{list.productName}</h1>
            <span>Rating: {list.productRating}</span>
            <span>Price: ${list.productPrice}</span>
            <div className="mt-2">
              <Button
                onClick={() => {
                  dispatch(addToCart());
                }}
                className="mr-2"
                color="warning"
              >
                Add To Cart
              </Button>
              <Link to={`/Product/:${list._id}`}>
                <Button className="mr-2" color="primary">
                  View
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MenProduct
