import { configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from './slices/weather'
import { todosApi } from './apis/todosApi'




export const store= configureStore({
    reducer:{
        weather:weatherSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})