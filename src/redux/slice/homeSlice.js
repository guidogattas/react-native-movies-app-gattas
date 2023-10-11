import { createSlice } from "@reduxjs/toolkit";
import { useGetMoviesQuery } from "../../services/ecApi";
import { products } from "../../data/products";
// const { data: products, isLoading, isError } = useGetProductsQuery()


const homeSlice = createSlice({
    name: "home",
    initialState: {
        allProducts: products,
        categorySelected: "",
        productsFilterByCategories: [],
        productSelected: {},
    },

    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload;

            state.productsFilterByCategories = state.allProducts.filter((el) => el.category === state.categorySelected);
        },

        setProductSelected: (state, action) => {
            state.productSelected = action.payload;
        },
    }
})

export const { setCategory, setProductSelected } = homeSlice.actions

export default homeSlice.reducer;