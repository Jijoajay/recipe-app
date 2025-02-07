import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode:false,
    isOpenFilter:false,
    selectedTabs:[],
}

const uiSlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        toggleDarkMode(state){
            state.isDarkMode = !state.isDarkMode
        },
        toggleFilter(state){
            state.isOpenFilter = !state.isOpenFilter
        },
        selectTab(state,action){
            const item = action.payload
            if(!state.selectedTabs){
                state.selectedTabs = []
            }
            if(state.selectedTabs?.includes(item)){
                state.selectedTabs = state.selectedTabs.filter(tab => tab !== item)
            }else{
                state.selectedTabs.push(item)
            }
        }
       

    }
})

export default uiSlice.reducer;
export const {toggleDarkMode, toggleFilter, selectTab} = uiSlice.actions
export const isDarkMode = (state) => state.ui.isDarkMode
export const selectFilterState = (state) => state.ui.isOpenFilter
export const selectAllTabs = (state)=> state.ui.selectedTabs
