import { configureStore } from '@reduxjs/toolkit'
import {addToCartSlice} from "../slice/cartSlice"

const store = configureStore({
    reducer:{
        addToCart : addToCartSlice.reducer
    }
})
export default store
