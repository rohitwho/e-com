import React, { useEffect , useState } from "react";
import Form from "../FormInput/Form";
import { Button,Select,SelectItem,Input ,Textarea} from "@nextui-org/react";
import axios from "axios";

function PostProduct() {
  const [products, setProducts] = useState({
    productName: "",
    productDescription: "",
    productCategory: "",
    productPrice: "",
    listType: "",
  });
  
  function handleForm(e) { 
    const { name, value } = e.target;
    setProducts((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }
  console.log(products);

  async function submitForm() {
    const postRequest = await axios.post(
      "https://shopall-7d84df423472.herokuapp.com/PostProduct",
      products
    );

    if (postRequest.status === 200) {
      setProducts({
        productName: "",
        productDescription: "",
        productCategory: "",
        productPrice: "",
        listType: "",
      });
    }
  }
  const category=  [
    {id:1 , productName: "MEN"},
    {id:2 , productName: "WOMEN"},
    {id:3 , productName: "Accessories"},
    {id:4 , productName: "Electronics"},
  ]

  return (
    <div className="gridContainer">
      <main className="Grid"  >
        <article className="Grid-Article">
          <Form
            inputType="file"
            placeholdertext=""
            ariaLabelName="Browse files To upload"
            labelFor=""
            inputLabel=""
          />
        </article>
        <section >
          <div style={{ display: "flex", gap:"6px"}}>

            <Input
      isRequired
      type="text"
      label="Product Name"
      name="productName"
      onChange={handleForm}
      value={products.productName}
      className="max-w-xs"
    />
        
            <Select
      isRequired
      label="Product Type"
      name="listType"
      placeholder="Select a List"
      value={products.listType}
      onChange={handleForm}
      className="max-w-xs"
    >
      {category.map((cotegories) => (
        <SelectItem   name="listType" onChange={handleForm} key={cotegories.id} value={cotegories.productName}>
          {cotegories.productName}
        </SelectItem>
      ))}
    </Select>


          </div>
          <Input
      isRequired
      type="text"
      label="Product Category"
     name="productCategory"
      onChange={handleForm}
  
      value={products.productCategory}
      className="max-w-xs p-2"
    />
         
         

<Textarea
       isRequired
        label=" Product Description"
        labelPlacement="inside"
        placeholder="Enter your description"
        name="productDescription"
        onChange={handleForm}
  
        value={products.productDescription}
      />
     

 
<Input
      isRequired
      type="number"
      label="Product Price:"
     name="productPrice"
      onChange={handleForm}
      value={products.productPrice}
      className="max-w-xs p-2"
    />
         
          <Button variant="ghost" color="primary" onClick={submitForm}>
            Submit
          </Button>
        </section>
      </main>
    </div>
  );
}

export default PostProduct;

// https://shopall-7d84df423472.herokuapp.com
