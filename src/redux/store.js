import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";
import authSlice from "./slice/authSlice";
import searchSlice from "./slice/searchSlice";
import { ecApi } from "../services/ecApi";


export const store = configureStore({
    reducer: {
        homeSlice,
        authSlice,
        searchSlice,
        [ecApi.reducerPath]: ecApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecApi.middleware)
});