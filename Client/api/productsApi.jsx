import axios from "axios";


const fetchProducts = async () => {
await axios
    .get("https://fakestoreapi.com/products")
    .then(function (response) {console.log(response.data)
    })
    
    const data = response.data
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
   
};

export default fetchProducts;