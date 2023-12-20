



export const FeelsLikeInfo = ({name, classN, value, unit,temp}) => {
   
  return (
   
    <div className={`fsxrght ${temp}`}>
         <i className={classN}></i>
         <p >{name}</p>
         <span>{value} {unit}</span>
     </div>
 
  )
}
