import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fc77849fc4425c65302ea8.mockapi.io";

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async ({ page = 1, limit = 4 }, thunkAPI) => {
      try {
        const response = await axios.get("/adverts", {
            params: { _page: page, _limit: limit },
          });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );