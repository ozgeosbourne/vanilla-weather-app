function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

}

let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);