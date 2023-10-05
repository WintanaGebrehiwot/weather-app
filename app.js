function formatDate(timestamp) {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getday();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day] + " " + hour + ":" + minutes;
}
function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "bad2d81e94a63442624ddfc12f2da77cc";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=" +
  apiKey;
axios.get(apiUrl).then(showTemperature);
