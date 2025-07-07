import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cartSlice";
const store= configureStore({
    reducer:{
         mycart:myReducer
    }
})

export default store;