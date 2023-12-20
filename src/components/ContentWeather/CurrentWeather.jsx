import { useSelector } from "react-redux"
import { getIcon } from "../../helpers/getIcon";



export const CurrentWeather = () => {
    
const {data}= useSelector(state=>state.weather);

const icon=getIcon(data.id);
const iconUrl=`/currentWeatherIcons/${icon}.svg`;

    return (
        <div className="current-weather ">
            <h2>{data.name}</h2>
            <div className="current-weather-img ">
                <img src={iconUrl} alt="" />
                
                <span>{data.temp}°</span>
            </div>
            <span>{data.description}</span>
        </div>
    )
}
