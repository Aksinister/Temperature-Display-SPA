function manageSearchRequest(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-bar");

  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "7300c6775obt0415fe6635cd0da0d3fe";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherStats);
}

function updateWeatherStats(response) {
  let temperatureItem = document.querySelector("#temperature-item");
  let temp = response.data.temperature.current;
  let cityItem = document.querySelector("#city-item");
  temperatureItem.innerHTML = Math.round(temp);
  cityItem.innerHTML = response.data.city;
}

let searchFormItem = document.querySelector("#search-form");
searchFormItem = addEventListener("submit", manageSearchRequest);

searchCity("Brisbane");
