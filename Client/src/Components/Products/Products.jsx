import React, { useEffect, useState } from 'react'
// import {Button} from '@nextui-org/react'
import axios from 'axios'

function Products({params}) {
    console.log(params)


    // const [singleProduct , setSingleProduct] = useState([])
    useEffect(()=>{
        const fetchSingleProduct = async () =>{
            await axios.get(`https://fakestoreapi.com/products/${params}`)
            .then((res)=>{
                console.log(res)
            })

        }
        fetchSingleProduct()
        
    },[params])


//   return (
//     <div>
// <div className='  mx-3.5 border'>
//     <h1>hello</h1>
//     <img src = {image}></img>
//     <h1>{title}</h1>
//     <p>{description}</p>
//     <span>{price}</span>
//     <Button>Add To Cart</Button>

// </div>
      
//     </div>
//   )
}

export default Products
