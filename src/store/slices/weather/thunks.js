
import { getWeatherbyCity } from "../../../helpers/getWeatherbyCity";
import { loadWeather, setError, setIsLoading } from "./weatherSlice";


export const startLoadingWeather=(city)=>{
    return async(dispatch)=>{

       dispatch(setIsLoading());
       const data=await getWeatherbyCity(city);
       if(!data.ok) return dispatch(setError(data));
    
       dispatch(loadWeather(data));
    }

}