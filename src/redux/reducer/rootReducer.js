import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiReducer from "./uiSlice";
import favouriteReducer from "./favouriteSlice";
import recipeReducer from "./recipeSlice";

const persistConfig = {
    key: "root",
    storage,
  };


const RootReducer = persistReducer(
    persistConfig,
    combineReducers({
      ui:uiReducer,
      favourite:favouriteReducer,
      recipes:recipeReducer
    })
);

export default RootReducer