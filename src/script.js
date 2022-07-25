let apiKey = "57c341795e71e4a5d113d1cd9d27ad8e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function displayTemperature(response);
console.log(response.data.main.temp);
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.main.temp;

axios.get(apiUrl).then(displayTemperature);
