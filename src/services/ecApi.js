import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'


export const ecApi = createApi({

    reducerPath: 'ecApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({

        //FIREBASE

        // Obtener una imagen de la base de datos Firebase.
        getImage: builder.query({
            query: () => "image.json",
        }),

        // Agregar o actualizar una imagen en la base de datos Firebase.
        putImage: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: "PUT",
                body: image,
            }),
        }),

        addUser: builder.mutation({
            query: ({ email, password }) => ({
                url: "users.json",
                method: "POST",
                body: {
                    email, password
                },
            }),
        }),
    }),
})

export const { useGetImageQuery, usePutImageMutation, useAddUserMutation } = ecApi;
