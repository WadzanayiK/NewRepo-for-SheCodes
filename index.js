function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Satuday"
    ];
  
    let day = days[date.getDay()];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let dateElement = document.querySelector("#todays-date");
  let today = new Date();
  dateElement.innerHTML = formatDate(today);
  
  function searchCity(event) {
    event.preventDefault();
    let city = document.querySelector("h1");
    let searchInput = document.querySelector("#search-input");
    city.innerHTML = `${searchInput.value}`;
    let apiKey = "701f06352d61835bc4fc894e7b084629";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureNumber = document.querySelector("#temperature");
    temperatureNumber.innerHTML = temperature;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    let wind = document.querySelector("#wind");
    let windSpeed = Math.round(response.data.wind.speed * 3.6);
    wind.innerHTML = `Wind: ${windSpeed}km/h`;
    let description = document.querySelector("#weather-description");
    description.innerHTML = `${response.data.weather[0].main}`;
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  
  function fahrenheitTemperature(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(temperature * 9) / 5 + 32;
  }
  let fahrenheit = document.querySelector("#fahrenheit-link");
  fahrenheit.addEventListener("click", fahrenheitTemperature);
  
  function celsiusTemperature(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 19;
  }
  let celsius = document.querySelector("#celsius-link");
  celsius.addEventListener("click", celsiusTemperature);
  