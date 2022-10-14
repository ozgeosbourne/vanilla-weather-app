function displayTemperature(response) {
    console.log(response.data);
}

let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);