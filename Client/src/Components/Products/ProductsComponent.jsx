

function Products({source,productName,rating,price,alt}) {
  return (

<>
<img className="productImage"src= {source} alt={alt} />
{/* <img  className="productImage" src = {source}> alt={alt}</img> */}
<h1 className="ProductH1">{productName}</h1>
{/* <span className='ProductRating'> {rating}</span> */}
<span> ${price}</span>

</>

  )
}

export default Products
