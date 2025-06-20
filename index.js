//api key --- d9346758897023a639bc13a02ce814f3
//api url --- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "d9346758897023a639bc13a02ce814f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();
