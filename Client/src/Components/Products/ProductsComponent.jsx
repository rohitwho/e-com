import React from 'react'

function Products({source,productName,rating,price}) {
  return (

<>

<img  className="productImage" src = {source}/>
<h1 className="ProductH1">{productName}</h1>
{/* <span className='ProductRating'> {rating}</span> */}
<span> ${price}</span>

</>

  )
}

export default Products
