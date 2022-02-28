import hoverReducer from './hover';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        hover: hoverReducer
    }
})

export default store;
