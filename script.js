const apiKey = "b231fff0025594bbd682b5cbe7d7047a";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const data = await fetch(url + city + `&appid=${apiKey}`);
  const responce = await data.json();
  document.querySelector(".search input").value = '';
  document.querySelector('.city').innerHTML = responce.name;
  document.querySelector('.temp').innerHTML = Math.round(responce.main.temp) + "°c";
  document.querySelector('.temperture').innerHTML = Math.round(responce.main.temp) + "°c";
  document.querySelector('.min-temperture').innerHTML = Math.round(responce.main.temp_min) + "°c";
  document.querySelector('.max-temperture').innerHTML = Math.round(responce.main.temp_max) + "°c";
  document.querySelector('.condition').innerHTML = responce.weather[0].main;
  document.querySelector('.humidity').innerHTML = responce.main.humidity + "%";
  document.querySelector('.wind-degree').innerHTML = responce.wind.deg;
  document.querySelector('.feel-humi').innerHTML = responce.main.feels_like + "%";
  document.querySelector('.Humidity').innerHTML = responce.main.humidity + "%";
  document.querySelector('.wind').innerHTML = responce.wind.speed + "Km/hr";
  document.querySelector('.wind-speed').innerHTML = responce.wind.speed + "Km/hr";
  document.querySelector('.sunrise').innerHTML = responce.sys.sunrise;
  document.querySelector('.sunset').innerHTML = responce.sys.sunset;
}


searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value)
})


async function fetchweather(city, temp, minTemp, maxTemp, wind, humidty, condition) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b231fff0025594bbd682b5cbe7d7047a`;
  try {
    const data = await fetch(apiUrl);
    if (!data.ok) {
      throw new Error("Network response was not ok")
    };
    const responce = await data.json();
    document.getElementById(temp).innerHTML = Math.round(responce.main.temp) + "°c";
    document.getElementById(minTemp).innerHTML = Math.round(responce.main.temp_min) + "°c";
    document.getElementById(maxTemp).innerHTML = Math.round(responce.main.temp_max) + "°c";
    document.getElementById(wind).innerHTML = responce.wind.speed + "Km/hr";
    document.getElementById(humidty).innerHTML = responce.main.humidity + "%";
    document.getElementById(condition).innerHTML = responce.weather[0].main;
  } catch (error) {
    console.error(`There was a problem fetching weather data for ${city}:`, error);
  }
};

async function updateFetchWeather() {
  await fetchweather('london', 'l-temp', 'ml-temp', 'mxl-temp', 'l-wind', 'l-hum', 'l-cond');
  await fetchweather('lahore', 'la-temp', 'mla-temp', 'mxla-temp', 'la-wind', 'la-hum', 'la-cond');
  await fetchweather('new york', 'n-temp', 'mn-temp', 'mxn-temp', 'n-wind', 'n-hum', 'n-cond');
  await fetchweather('karachi', 'k-temp', 'mk-temp', 'mxk-temp', 'k-wind', 'k-hum', 'k-cond');
  await fetchweather('paris', 'p-temp', 'mp-temp', 'mxp-temp', 'p-wind', 'p-hum', 'p-cond');
  await fetchweather('delhi', 'd-temp', 'md-temp', 'mxd-temp', 'd-wind', 'd-hum', 'd-cond');
  await fetchweather('mumbai', 'm-temp', 'mm-temp', 'mxm-temp', 'm-wind', 'm-hum', 'm-cond');
  await fetchweather('shanghai', 's-temp', 'ms-temp', 'mxs-temp', 's-wind', 's-hum', 's-cond');
  await fetchweather('colombo', 'c-temp', 'mc-temp', 'mxc-temp', 'c-wind', 'c-hum', 'c-cond');
  await fetchweather('moscow', 'mo-temp', 'mmo-temp', 'mxmo-temp', 'mo-wind', 'mo-hum', 'mo-cond')
}
updateFetchWeather();