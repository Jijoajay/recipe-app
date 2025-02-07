import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "../../api/fetch";

export const fetchRecipes = createAsyncThunk(
    "recipes/fetchRecipes",
    async (params, thunkAPI) => {
        try {
            const response = await fetch.get({params});
            return response.data.hits;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);