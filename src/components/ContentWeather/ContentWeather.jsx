import { useSelector } from "react-redux"
import { CurrentWeather } from "./CurrentWeather"
import { FeelsLike } from "./FeelsLike"
import { Spinner } from "../Spinner";


export const ContentWeather = () => {
  const {isLoading}=useSelector(state=>state.weather);
  
  return (
    <div className="content-weather">

        {
          (isLoading)
          ? <Spinner/>
          : 
          <>
            <CurrentWeather/>
            <FeelsLike/>
          </>
          
        }
          
     </div>
  )
}
