const findLocation = ()=> {

   const status = document.querySelector('.status')
   
   const success = async (position)=>{
       const coordinates = await position.coords.latitude
       console.log(coordinates);
       status.textContent = coordinates
   }

   const error = ()=>{
       console.log("Access Denied");
   }
   
   navigator.geolocation.getCurrentPosition(success, error)
   
}

const button = document.querySelector('.location')
button.addEventListener('click', findLocation, false)