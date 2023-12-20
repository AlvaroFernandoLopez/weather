
import { useEffect, useState } from "react";
import { HomePage } from "./page/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingWeather } from "./store/slices/weather/thunks";
import { getUserlocation } from "./helpers/getUserlocation";


export const App = () => {

  const dispatch=useDispatch();
  
  useEffect(() => { 
    getUserlocation().then(latlon=>(
        dispatch(startLoadingWeather({lat:latlon[0], lon:latlon[1]}))
    ))
  }, []);
  
  return (
    <>
        <HomePage/>
        
    </>
  )
}
