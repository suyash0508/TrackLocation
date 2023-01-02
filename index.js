const lookupBtn=document.querySelector(".lookup-btn");
const ipDisplay=document.querySelector(".ip-display");
const cityDisplay=document.querySelector(".city-display");
const stateDisplay=document.querySelector(".state-display");
const postalDisplay=document.querySelector(".postal-display");
const currencyDisplay=document.querySelector(".currency-display");
const coordinateDisplay=document.querySelector(".coordinate-display");
const connectionDisplay=document.querySelector(".connection-display");
const callingCodeDisplay=document.querySelector(".callingCode-display");
const loader=document.querySelector(".loader-container");
const details=document.querySelector(".details");

lookupBtn.addEventListener("click",()=>{

    loader.style.display="flex";  //for design
    details.style.display="none";  //for design

    fetch(`https://ipapi.co/json/`)
    .then((Response)=>Response.json())

    .then( (data) =>{

        loader.style.display="none";  //for design
        details.style.display="block"; //for design

        cityDisplay.textContent=`City : ${data.city}`
        stateDisplay.textContent=`State : ${data.region}`
        postalDisplay.textContent=`Postal : ${data.postal}`
        currencyDisplay.textContent=`Currency : ${data.currency_name}`
        coordinateDisplay.textContent=`Coordinates : ${data.latitude},${data.longitude}`
        connectionDisplay.textContent=`Connection : ${data.org}`
        callingCodeDisplay.textContent=`Calling Code : ${data.country_calling_code}`
        ipDisplay.textContent=`IP : ${data.ip}`
    })
     
})

