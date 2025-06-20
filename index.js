//api key --- d9346758897023a639bc13a02ce814f3
//api url --- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "d9346758897023a639bc13a02ce814f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    
    //console.log(data);
  


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/hr"

    if(data.weather[0].main==="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main==="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main==="Dizzle"){
        weatherIcon.src="images/dizzle.png";
    }
    else if(data.weather[0].main==="Clears"){
        weatherIcon.src="images/clear.png";
    }
    document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none";
   

    }
    }
    searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
});