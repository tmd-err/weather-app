const apiKey = "ea1ac6f86cf4aeaa86aff35786bdbc94" ; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric" ;

const cityName = document.querySelector('.search input') ;
const formBtn = document.querySelector('.search button') ;
const weather_icon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`) ;
    if(response.ok){
        var data = await response.json() ; 
        console.log(data) ; 
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"<span>°C</span>" ;
        document.querySelector('.humidity').innerHTML = data.main.humidity+"%" ;
        document.querySelector('.wind').innerHTML = data.wind.speed+'KM/H' ;
        if(data.weather[0].main =="Clouds"){
            weather_icon.src = "images/clouds.png" ;
        }else if(data.weather[0].main =="Rain"){
            weather_icon.src = "images/rain.png" ;
        }
        else if(data.weather[0].main =="Drizzle"){
            weather_icon.src = "images/drizzle.png" ;
        }
        else if(data.weather[0].main =="Mist"){
            weather_icon.src = "images/mist.png" ;
        }else if(data.weather[0].main =="Clear"){
            weather_icon.src = "images/clear.png" ;
        }
        else if(data.weather[0].main =="Snow"){
            weather_icon.src = "images/snow.png" ;
        }
        document.querySelector('.weather').style.display="block" ;
    }else{
        document.querySelector('.weather').style.display="none" ;
        const errMsg = 
        document.querySelector('.errMsg') ;
        errMsg.style.cssText ="color:#fff;font-size:1.2rem;visibility:visible" ;
        errMsg.textContent = 'Please make Sure you write the city name correctly !';
        setTimeout(()=>{
            errMsg.textContent = '';
        },3000)
    }



}
formBtn.addEventListener('click',()=>{
    checkWeather(cityName.value) ;
})
