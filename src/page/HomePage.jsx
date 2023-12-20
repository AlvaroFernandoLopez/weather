

import { ContentWeather } from "../components/ContentWeather"
import { FooterComponent } from "../components/FooterComponent"
import { Header } from "../components/Header"
import { SearchComponent } from "../components/SearchComponent"


export const HomePage = () => {

  return (
    
    <>
    <div >
      <Header/>
      <SearchComponent/>
      <ContentWeather/>
      <FooterComponent/> 
    </div>
    
    
    </>
    
  )
}
