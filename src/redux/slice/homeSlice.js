import { createSlice } from "@reduxjs/toolkit";




const homeSlice = createSlice({
    name: "home",
    initialState: {
        trendingMovies: [],
        trendingSeries: [],
        topRatedMovies: [],
        discoverMovies: [],

    },

    reducers: {
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        setTrendingSeries: (state, action) => {

            state.trendingSeries = action.payload
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        setDiscoverMovies: (state, action) => {
            state.discoverMovies = action.payload
        }

    }
})

export const { setTrendingMovies, setTrendingSeries, setTopRatedMovies, setDiscoverMovies } = homeSlice.actions

export default homeSlice.reducer;