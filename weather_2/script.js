const API_id="https://api.openweathermap.org/data/2.5/weather?q="
let city_name
const API_key="&appid=e3259eb7418b40612d818d20bcab8dbf"

let input_city=document.querySelector("#input_city");
let container=document.querySelector(".card")
let search_btn=document.querySelector("#search_btn");

search_btn.addEventListener("click",()=>{
    city_name=input_city.value;
    input_city.value=""
    weather(city_name)
})

// weather("gandhinagar")

async function weather(name) {
    let response=await fetch(API_id+name+API_key)
    let data=await response.json()
    console.log(data)
    document.querySelector(".city_name_display").innerText=data.name
    document.querySelector(".temp_details").innerText=(data.main.temp-273).toFixed(2)+"°C";
    document.querySelector("#wind_speed").innerText=(data.wind.speed*3.6).toFixed(2)+"Km/h";
    document.querySelector("#hum").innerText=data.main.humidity+"%";

    if(data.weather[0].main === "Clouds"){
        container.style.backgroundImage="url('Images/clouds_3.jpg')";
        document.querySelector("#img_container").src="Images/clouds.png";
        document.querySelector("body").style.backgroundImage="url('Images/clouds_background.jpg')"
    }else if(data.weather[0].main === "Clear"){
        container.style.backgroundImage="url('Images/clear_2.jpg')";
        document.querySelector("#img_container").src="Images/clear.png";
        document.querySelector("body").style.backgroundImage="url('Images/clear_background.jpg')"
    }else if(data.weather[0].main === "Rain"){
        container.style.backgroundImage="url('Images/rain_2.jpg')";
        document.querySelector("#img_container").src="Images/rain.png";
        document.querySelector("body").style.backgroundImage="url('Images/rain_background.jpg')"
    }else if(data.weather[0].main === "Mist"){
        container.style.backgroundImage="url('Images/mist_2.jpg')";
        document.querySelector("#img_container").src="Images/mist.png"; 
        document.querySelector("body").style.backgroundImage="url('Images/mist_background.jpg')"
    }
}