import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites:[],
    isHovered:false
}
const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite(state, action) {
            state.favourites.push(action.payload)
        },
        setHover(state){
            state.isHovered = !state.isHovered
        }
    }
})

export default favouriteSlice.reducer
export const {addFavourite, setHover} = favouriteSlice.actions
export const selectAllFavourites = (state)=> state.favourite.favourites
export const selectIsHovered = (state)=> state.favourite.isHovered
