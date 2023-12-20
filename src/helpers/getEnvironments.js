export const getEnvironments = () => {
    
    // import.meta.env;

    return {
        VITE_REACT_APP_WEATHER_API_KEY: import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
        //...import.meta.env
    }
}