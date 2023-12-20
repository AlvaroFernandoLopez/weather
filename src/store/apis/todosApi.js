import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5'
    }),

    endpoints: (builder) => ({

        getWeatherByCity: builder.query({
            query: (city) => `/weather?q=${city}&appid=7555fdf65b51e3320a44e238b2334bcb&lang=es`
        }),

        getWeatherByLat: builder.query({
            query: (latitud,longitud) => `/weather?lat=${latitud}&lon=${longitud}&appid=7555fdf65b51e3320a44e238b2334bcb`
        }),

    })

})

export const { useGetWeatherByCityQuery, useGetWeatherByLatQuery, } = todosApi;
