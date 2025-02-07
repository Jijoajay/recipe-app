import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import RootReducer from "./reducer/rootReducer";

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const PersistStore = persistStore(store);

export { store, PersistStore };