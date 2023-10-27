import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

export const ecApi = createApi({

    reducerPath: 'ecApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({

        // Obtener una imagen de la base de datos Firebase.
        getImage: builder.query({
            query: (uid) => `users/${uid}/image.json`,
        }),

        // Agregar o actualizar una imagen en la base de datos Firebase.
        putImage: builder.mutation({
            query: ({ uid, image }) => ({
                url: `users/${uid}/image.json`,
                method: "PUT",
                body: image,
            }),
        }),
        // Agregar User a la base de datos Firebase para pasarle data.

        addUser: builder.mutation({
            query: ({ email, uid }) => ({
                url: `users/${uid}.json`,
                method: "POST",
                body: {
                    email,
                },
            }),
        }),


        // Obtener los favoritos de cada usuario
        getFavorites: builder.query({
            query: (uid) => `users/${uid}/favorites.json`,
        }),
    }),
})

export const {
    useGetImageQuery,
    usePutImageMutation,
    useAddUserMutation,
    useGetFavoritesQuery
} = ecApi;
