
import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading:false, 
        data:{},
        errorMessage:null
    },
    reducers: {
        setIsLoading:(state)=>{
          state.isLoading=true;
        },
        loadWeather: (state, {payload} ) => {
            state.data=payload ,
            state.isLoading=false    
        },
        setError:(state,{payload})=>{
            state.errorMessage=payload?.errorMessage
        }
    }
});


// Action creators are generated for each case reducer function
export const { loadWeather, setIsLoading, setError} = weatherSlice.actions;