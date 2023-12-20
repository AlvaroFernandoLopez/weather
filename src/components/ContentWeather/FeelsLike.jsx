import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FeelsLikeInfo } from "./FeelsLikeInfo";


export const FeelsLike = () => {

    const {data}= useSelector(state=>state.weather);
    console.log(data.feels_like)
    const measure=[
        {
            name:'Temp max',
            classN:'fa-solid fa-arrow-up',
            unit:'°',
            value:data.temp_max,
            temp:'temp'
        },
        {
            name:'Temp min',
            classN:'fas fa-arrow-down',
            unit:'°',
            value:data.temp_min,
            temp:'temp'
        },

        {
            name:'Humidity',
            classN:'fa-solid fa-droplet',
            unit:'%',
            value:data.humidity
        },
        {
            name:'Wind',
            classN:'fa-solid fa-wind',
            unit:'kph',
            value:data.wind,

        },
        {
            name:'Pressure',
            classN:'fa-brands fa-wpressr',
            unit:'hpa',
            value:data.pressure
        }

    ];

    
  return (
    <div className="feels-like ">
    
    <p className="feels-p">Feels like {data.feels_like}°</p>
    <div className="wrzsdfg ">
        <div className="dfsgrt ">
        <i className="fa-solid fa-arrow-up"></i>
        23
        <sub>°</sub>
        </div>

        <div className="dfsgrt">
        <i className="fas fa-arrow-down"></i>
        18
        <sub>°</sub>
        </div>
    </div>
    {
        measure.map(measure=>(
            
           <FeelsLikeInfo
                key={measure.name}
                {...measure}
           />
        ))
       
    }
   
</div>
  )
}
