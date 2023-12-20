
import { weatherApi } from "../api/weatherApi";
import { getConvertTemp } from "./getConvertTemp";
import { getEnvironments } from "./getEnvironments";

export const getWeatherbyCity = async(city ) => {

    const {VITE_REACT_APP_WEATHER_API_KEY}=getEnvironments();
   
    let url=`/weather?q=${city}&appid=${VITE_REACT_APP_WEATHER_API_KEY}`;
    
    if(typeof city=== "object"){
      
        const {lat,lon}=city;
        url=`/weather?lat=${lat}&lon=${lon}&appid=${VITE_REACT_APP_WEATHER_API_KEY}`;
    }

    try {

     const {data}= await weatherApi.get(url);
 
        
        const weatherData={
            name:data.name,
            ...data.main,
            ...data.weather[0],
            temp:getConvertTemp(data.main.temp),
            temp_min:getConvertTemp(data.main.temp_min),
            temp_max: getConvertTemp(data.main.temp_max),
            feels_like:getConvertTemp(data.main.feels_like)
        }
        weatherData.wind = Math.round(data.wind.speed * 3.6);
        
        return {
            ok:true,
            ...weatherData
        }
    } catch (error) {
        const errorMessage=error.message;
        return{
            ok:false,
            errorMessage
        }
    }
           
    
}
