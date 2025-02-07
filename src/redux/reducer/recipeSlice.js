import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../thunk/recipe.thunk";

const intialParamsValue = {
    q:"",
    from:0,
    to:20,
    mealType:[],
    dietLabels:[],
    healthLabels:[],
    mealType:[],
    ingredients:[],
    calories:[],
    dishType:[],
    cuisineType:[]
}

const initialState = {
    isLoading:false,
    error:null,
    data:[],
    params:intialParamsValue

}
const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers:{
        setParams: (state, action) => {
            const { key, value } = action.payload;
            console.log("key", key, value)
            if (!Array.isArray(state.params[key])) {
                state.params[key] = value;
            } else {
                if (state.params[key].includes(value)) {
                    state.params[key] = state.params[key].filter((item) => item !== value);
                } else {
                    state.params[key].push(value);
                }
            }
        },
        resetParams(state){
            state.params = intialParamsValue
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

})

export default recipeSlice.reducer;
export const {setParams, resetParams} = recipeSlice.actions
export const selectParams = (state) => state.recipes.params
export const selectAllData = (state) => state.recipes.data