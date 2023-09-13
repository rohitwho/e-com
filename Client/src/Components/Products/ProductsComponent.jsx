import React from 'react'

function Products({source,productName,rating,price}) {
  return (

<>

<img  className="productImage" src = {source}/>
<h1 className="text-lg font-semibold">{productName}</h1>
<span>Rating: {rating}</span>
<span>Price: ${price}</span>

</>

  )
}

export default Products
