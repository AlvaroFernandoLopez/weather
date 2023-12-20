


export const getUserlocation = async() => {
 
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            ({coords})=>{
                resolve([coords.latitude, coords.longitude])
            },
            (err)=>{
                alert('No se pudo obtener la ubicacion')
                console.log(err)
                reject();
            }
        )
    })
}
