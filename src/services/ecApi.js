import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

export const ecApi = createApi({

    reducerPath: 'ecApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getMovies: builder.query({
            query: () => 'movies.json',
        }),

        //FIREBASE
        getImage: builder.query({
            query: () => "image.json",
        }),
        putImage: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: "PUT",
                body: image,
            }),
        })
    }),
})

export const { useGetCategoriesQuery, useGetMoviesQuery, useGetImageQuery, usePutImageMutation } = ecApi;
