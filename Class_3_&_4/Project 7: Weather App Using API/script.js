/*
  Project 7: Weather App Using API

  Main features:
  1. User enters city name
  2. JavaScript sends request to weather API
  3. API returns weather data in JSON format
  4. JavaScript displays weather data on the page
  5. Error message is shown if city is invalid

  This project is very important before React and full-stack because
  modern websites frequently use APIs.
*/


/*
  API key from OpenWeatherMap.

  Replace YOUR_API_KEY_HERE with your actual API key.

  Example:
  const apiKey = "abc123xyz";
*/
const apiKey = "299156fcc05766f93a4e9fc3cb260d31";


/*
  Selecting HTML elements.
*/
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const weatherResult = document.getElementById("weatherResult");


/*
  Click event for search button.

  When user clicks Search, getWeather() function will run.
*/
searchBtn.addEventListener("click", getWeather);


/*
  Keydown event for input field.

  If user presses Enter, getWeather() function will run.
*/
cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});


/*
  Main async function to get weather data from API.
*/
async function getWeather() {

  /*
    Get city name from input.
    trim() removes extra spaces.
  */
  const cityName = cityInput.value.trim();


  /*
    Validation:
    If city name is empty, show error and stop function.
  */
  if (cityName === "") {
    showMessage("Please enter a city name.", "error");
    return;
  }


  /*
    API URL.

    q = city name
    appid = API key
    units=metric means temperature will come in Celsius
  */
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;


  /*
    try/catch is used because API calls may fail.

    Reasons:
    - wrong city name
    - internet problem
    - invalid API key
    - API server issue
  */
  try {

    /*
      Show loading message before API response comes.
    */
    showMessage("Loading weather data...", "loading");

    /*
      fetch() sends request to API.
      await waits until response comes.
    */
    const response = await fetch(apiUrl);


    /*
      Convert API response to JavaScript object.

      API sends data in JSON format.
      response.json() converts JSON into normal JS object.
    */
    const data = await response.json();


    /*
      If response is not successful, show the real API error.
      Example:
      - invalid city gives 404
      - invalid API key gives 401
    */
    if (!response.ok) {
      throw new Error(data.message || "Unable to load weather data.");
    }


    /*
      Display weather data on page.
    */
    displayWeather(data);


    /*
      Show success message.
    */
    showMessage("Weather data loaded successfully.", "success");

  } catch (error) {

    /*
      If any error happens, show error message.
    */
    showMessage(error.message, "error");

    /*
      Clear old weather result.
    */
    weatherResult.innerHTML = `
      <p class="default-text">No weather data available.</p>
    `;
  }
}


/*
  Function to display weather data on page.
*/
function displayWeather(data) {

  /*
    Extract required data from API response.

    data.name = city name
    data.sys.country = country code
    data.main.temp = temperature
    data.weather[0].description = weather condition
    data.weather[0].icon = weather icon code
    data.main.humidity = humidity
    data.wind.speed = wind speed
    data.main.feels_like = feels like temperature
  */
  const city = data.name;
  const country = data.sys.country;
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const feelsLike = Math.round(data.main.feels_like);


  /*
    Weather icon URL.
  */
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


  /*
    Insert weather data into HTML.
  */
  weatherResult.innerHTML = `
    <h2>${city}, ${country}</h2>

    <img 
      src="${iconUrl}" 
      alt="${condition}" 
      class="weather-icon"
    >

    <div class="temperature">${temperature}°C</div>

    <p class="condition">${condition}</p>

    <div class="weather-details">

      <div class="detail-box">
        <span>Feels Like</span>
        <strong>${feelsLike}°C</strong>
      </div>

      <div class="detail-box">
        <span>Humidity</span>
        <strong>${humidity}%</strong>
      </div>

      <div class="detail-box">
        <span>Wind Speed</span>
        <strong>${windSpeed} m/s</strong>
      </div>

      <div class="detail-box">
        <span>Location</span>
        <strong>${city}</strong>
      </div>

    </div>
  `;
}


/*
  Function to show message.

  type can be:
  - loading
  - success
  - error

  CSS uses these class names for different colors.
*/
function showMessage(text, type) {
  message.innerText = text;
  message.className = type;
}
