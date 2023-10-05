import React, { useEffect } from "react";
import Form from "../FormInput/Form";
import { Button } from "@nextui-org/react";

function PostProduct() {



useEffect(()=>{
    
})












  return (
    <div className="gridContainer">
      <main className="Grid">
        <article className="Grid-Article">
          <Form
            inputType="file"
            placeholdertext="Browse files To upload"
            labelFor=""
            inputLabel="Browse files To upload"
          />
        </article>
        <section >
          <Form
            inputType="text"
            placeholdertext=""
            labelFor="Product Name"
            inputLabel="Product Name :"
          />
          <label htmlFor="Product">List Type:</label>
          <select id="Product" name="Product">
            <option  value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
          </select>
          <div style={{ display: "flex" }}>
            <Form
              inputType="text"
              placeholdertext=""
              labelFor="Product Description:"
              inputLabel="Product Description:"
            />

            <Form
              inputType="text"
              placeholdertext=""
              labelFor="Product Category:"
              inputLabel="Product Category:"
            />
          </div>
          <Form
            inputType="number"
            placeholdertext=""
            labelFor="Product Price:"
            inputLabel="Product Price"
          />
          <Button>Submit</Button>
        </section>
      </main>
    </div>
  );
}

export default PostProduct;
