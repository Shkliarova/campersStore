import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertSlice = createSlice({
    name: 'adverts',
    initialState: {
      adverts: {
        items: [],
        isLoading: false, 
        error: null,      
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAdverts.pending, (state) => {
          state.adverts.isLoading = true;
          state.adverts.error = null; 
        })
        .addCase(fetchAdverts.fulfilled, (state, action) => {
          state.adverts.isLoading = false;
          state.adverts.error = null;
          state.adverts.items = action.payload;
        })
        .addCase(fetchAdverts.rejected, (state, action) => {
          state.adverts.isLoading = false;
          state.adverts.error = action.payload;
        });
    },
  });
  
  export const advertsReducer = advertSlice.reducer;