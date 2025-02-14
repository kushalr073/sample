import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import productReducer from './productSlice';
import themeReducer from "./themeSlice";
const store=configureStore({
    reducer:{
        cart:cartReducer,
        Product:productReducer,
        theme:themeReducer,

    }
});
export default store;
