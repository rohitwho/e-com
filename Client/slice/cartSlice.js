import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({

name:"addToCart",
initialState:{
    value:[],
    selectedProduct: null, 
},
reducers:{
    addToCart:(state,action)=>{
   
        const itemPresent = state.value.find((list) => list.id === action.payload.id);
       if (itemPresent){
        itemPresent.quantity++
       }
       else{
        state.value.push({...action.payload,quantity:1})
       }

    },
    removeFromCart: (state, action) => {
        const itemToRemove = state.value.find((item) => item.id === action.payload.id);
      
        if (itemToRemove) {
          if (itemToRemove.quantity > 1) {
            // If the quantity is greater than 1, decrease the quantity
            itemToRemove.quantity--;
          } else {
            // If the quantity is 1, remove the item from the cart
            state.value = state.value.filter((item) => item.id !== action.payload.id);
          }
        }
      },
      
    setSelectedProduct:(state,action)=>{
        state.selectedProduct = action.payload
    }
}


})
export const selectCount = (state) => state.addToCart.value

export const selectSelectedProduct = (state)=> state.addToCart.selectedProduct

export const {addToCart,removeFromCart,setSelectedProduct} = addToCartSlice.actions

export default addToCartSlice.reducers