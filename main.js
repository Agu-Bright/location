const findLocation = ()=> {

   const longitude = document.querySelector('.longitude')
   const lathitude = document.querySelector('.latitude')
   
   const success = async (position)=>{
       const lat = await position.coords.latitude
       const long = await position.coords.longitude
       console.log(coordinates);
       lathitude.textContent = lat;
       longitude.textContent = long;
   }

   const error = ()=>{
       console.log("Access Denied");
   }
   
   navigator.geolocation.getCurrentPosition(success, error)
   
}

const button = document.querySelector('.location')
button.addEventListener('click', findLocation, false)