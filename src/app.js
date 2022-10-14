function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    //let humidityElement = document.querySelector("#humidity");
    //humidityElement.innerHTML = response.data.main.humidity;
    //let windElement = document.querySelector("#wind");
    //windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);