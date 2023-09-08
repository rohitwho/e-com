import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({

name:"addToCart",
initialState:{
    value:0
},
reducers:{
    addToCart:(state,action)=>{
        state.value+=1

    },

    removeFromCart:(state,action)=>{
        // state.value-=1
        if(state.value >= 1){
             state.value-=1

        }else{
            return
        }

    }
}


})
export const selectCount = (state) => state.addToCart.value

export const {addToCart,removeFromCart} = addToCartSlice.actions

export default addToCartSlice.reducers