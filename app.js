const APIKEY = "dc79405d52022bb01b86e1c580f2d176";
const APIURL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");
searchBox.value = "";

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        event.preventDefault();
        searchBtn.click();
    }
})

async function checkWeather(city) {
    searchBox.value = "";
    document.querySelector(".weather").style.display = "block"
    const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
    const data = await response.json();

    if (data.weather["0"].main == "Clouds") {
        weather_icon.src = "./images/clouds.png";
    } else if (data.weather["0"].main == "Drizzle") {
        weather_icon.src = "./images/drizzle.png";
    } else if (data.weather["0"].main == "Clear") {
        weather_icon.src = "./images/sun.png";
    } else if (data.weather["0"].main == "Snow") {
        weather_icon.src = "./images/snow.png";
    } else if (data.weather["0"].main == "Mist") {
        weather_icon.src = "./images/mist.png";
    } else if(data.weather["0"].main == "Rain") {
        weather_icon.src = "./images/rain.png"
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // console.log(data);
}
checkWeather(city);
