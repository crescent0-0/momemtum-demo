const API_KEY = "5f33a0d4fde07379098ae93a6462279c";
const weather = document.querySelector("#weather-container #weather");
const city = document.querySelector("#weather-container #city");


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert(`Can't find you. No weather for you.`)
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);