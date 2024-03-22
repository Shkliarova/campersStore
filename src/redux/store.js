import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "../redux/advertSlice";

export const store = configureStore({
    reducer: {
        adverts: advertsReducer
    },
})