# Project 7: Weather App Using API

## Project Overview

This is a beginner-friendly **Weather App Using API** built with **HTML, CSS, and JavaScript**. The app allows users to search for a city and displays current weather data such as temperature, condition, humidity, wind speed, and feels-like temperature.

This project teaches students how frontend applications communicate with external APIs and handle JSON data.

---

## Project Objective

The objective of this project is to teach students how to:

- Take city input from the user
- Call a real weather API using `fetch()`
- Use `async/await` for asynchronous code
- Convert API response data from JSON
- Handle loading, success, and error states
- Display API data dynamically on the webpage

---

## What Students Will Learn

| Topic | Learning |
| --- | --- |
| API | Understand how apps request external data |
| `fetch()` | Send HTTP requests from JavaScript |
| `async/await` | Wait for API responses cleanly |
| JSON | Work with API response data |
| Error Handling | Handle invalid city names and failed requests |
| Dynamic UI | Show weather information using JavaScript |

---

## Features

- Search weather by city name
- Search using button click
- Search using Enter key
- OpenWeatherMap API integration
- Loading message while data is being fetched
- Success message after data loads
- Error message for invalid city or API issues
- Dynamic weather card
- Weather icon display
- Temperature in Celsius
- Feels-like temperature, humidity, wind speed, and location display
- Responsive design for mobile screens

---

## Folder Structure

```text
Project 7: Weather App Using API/
├── index.html
├── style.css
├── script.js
└── README.md
```

| File | Purpose |
| --- | --- |
| `index.html` | Creates the city input, search button, message area, and weather result card |
| `style.css` | Styles the weather app, search box, messages, weather card, and responsive layout |
| `script.js` | Handles API key, city search, API call, JSON parsing, error handling, and dynamic display |
| `README.md` | Explains the project |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API

---

## How to Run the Project

1. Open the project folder.
2. Open `script.js`.
3. Replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key.
4. Open `index.html` in any web browser.
5. Enter a city name.
6. Click **Search** or press **Enter**.

This is a frontend project, but it needs internet access and a valid API key to load weather data.

---

## API Setup Instructions

This project uses the **OpenWeatherMap Current Weather API**.

In `script.js`, the API key is currently written like this:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

Replace it with your actual API key:

```js
const apiKey = "your_actual_api_key";
```

API URL used in this project:

```js
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
```

The `units=metric` part returns temperature in Celsius.

Important: Do not expose real API keys in public professional projects. For beginner practice this is acceptable, but in production apps API keys should be protected through backend environment variables.

---

## Key JavaScript Concepts Used

```js
document.getElementById()
addEventListener()
event.key
.value
.trim()
async function
await
fetch()
response.ok
response.json()
try
catch
throw new Error()
template literals
innerText
innerHTML
Math.round()
```

---

## API and Async JavaScript Explanation

### API

An **API** allows two applications to communicate. In this project, the frontend sends a request to OpenWeatherMap, and the API sends weather data back.

### `fetch()`

`fetch()` is used to send an HTTP request from JavaScript.

```js
const response = await fetch(apiUrl);
```

### `async/await`

API calls take time. `async/await` helps JavaScript wait for the API response before moving to the next step.

### JSON

JSON stands for **JavaScript Object Notation**. APIs commonly send data in JSON format because it is lightweight and easy to use.

### `response.json()`

`response.json()` converts the API response from JSON format into a normal JavaScript object.

```js
const data = await response.json();
```

### `response.ok`

`response.ok` checks whether the API request was successful. If the city is invalid, the API may return an error status like `404`.

```js
if (!response.ok) {
  throw new Error("City not found. Please enter a valid city name.");
}
```

### `try/catch`

`try/catch` handles errors safely. API calls can fail because of invalid city names, network problems, wrong API keys, or server issues.

---

## City Search and Dynamic Weather Display

1. The user enters a city name in the input field.
2. JavaScript reads the city name using `.value.trim()`.
3. If the input is empty, an error message is shown.
4. If the input is valid, the app creates an API URL using the city name and API key.
5. `fetch()` sends the request to OpenWeatherMap.
6. The response is checked using `response.ok`.
7. The response data is converted using `response.json()`.
8. `displayWeather(data)` extracts useful weather details.
9. The weather card is updated using `innerHTML`.

Displayed weather data includes:

| Data | Source |
| --- | --- |
| City | `data.name` |
| Country | `data.sys.country` |
| Temperature | `data.main.temp` |
| Condition | `data.weather[0].description` |
| Icon | `data.weather[0].icon` |
| Humidity | `data.main.humidity` |
| Wind speed | `data.wind.speed` |
| Feels like | `data.main.feels_like` |

---

## Full-Stack Connection

This project is an important bridge between frontend and full-stack development.

| This Project Concept | Full-Stack Usage |
| --- | --- |
| API call from frontend | Frontend-backend communication |
| Weather API URL | REST API endpoint |
| API response | Backend response data |
| JSON parsing | Reading API/database data |
| Loading message | Loading state in React apps |
| Error message | API error handling |
| Dynamic weather card | Rendering API data in UI |

In React or full-stack apps, the same flow is used often:

```text
User Action -> API Request -> JSON Response -> Loading/Error Handling -> Dynamic UI Update
```

Examples:

- Fetch products from a backend
- Load student records from a database
- Show dashboard analytics
- Search users or orders
- Submit forms to backend APIs
- Display weather, news, payment, or map data from third-party APIs

---

## Important Interview Questions and Answers

### 1. What is an API?

An API is a way for two applications to communicate and exchange data.

### 2. What is `fetch()`?

`fetch()` is a JavaScript method used to send HTTP requests and receive responses.

### 3. What is `async/await`?

`async/await` is used to handle asynchronous operations in a clean and readable way.

### 4. What is JSON?

JSON is a lightweight data format used to send data between frontend, backend, and APIs.

### 5. What does `response.json()` do?

It converts the API response into a JavaScript object.

### 6. What does `response.ok` check?

It checks whether the API request was successful.

### 7. Why do we use `try/catch` with API calls?

Because API calls can fail due to invalid input, network issues, wrong API keys, or server errors.

### 8. Why do we show a loading message?

A loading message tells the user that data is being fetched and the app is working.

### 9. What happens if the city name is invalid?

The API returns an error response, and the app shows an error message.

### 10. How does this project help in React learning?

React apps frequently use the same API flow: fetch data, store it in state, handle loading/errors, and render UI dynamically.

---

## Learning Outcome

After completing this project, students will understand how to call an API using `fetch()`, work with `async/await`, convert JSON using `response.json()`, check request status with `response.ok`, handle errors with `try/catch`, and display API data dynamically on a webpage.

---

## Future Improvements

- Add current location weather
- Add 5-day forecast
- Add weather background changes
- Add recent search history
- Add loading spinner
- Add better API key protection using backend environment variables
- Convert the project into React
- Store favorite cities
- Add temperature unit toggle between Celsius and Fahrenheit

---

## Author

**Made by SK SAHIL**  
**Professional Coding Tutor | Freelance AI Developer**
