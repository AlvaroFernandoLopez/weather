import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm"
import { startLoadingWeather } from "../store/slices/weather/thunks";




export const SearchComponent = () => {

  const dispatch=useDispatch();
  
  const {formState, onInputChange}=useForm({
    city:''
  });

 const {city}=formState;
 
 const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('ciudad',city)
    dispatch(startLoadingWeather(city))
    
 }
  return (
    
    <form 
        className="search "
        onSubmit={handleSubmit}
      >

        <input
        
            type="text"
            name="city"
            autoComplete="off"
            value={city}
            placeholder="Search city"
            onChange={onInputChange}
        />
        
        <button type="submit"><i className="fas fa-search"></i></button>

    </form>
 
   
  )
}
