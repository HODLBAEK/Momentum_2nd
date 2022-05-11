const API_KEY = "906280e4d21ec07cd11cdcd29470f75d";

function success(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in ${lat} ${lng}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp}°C / ${data.weather[0].description} / `;
      city.innerText = data.name.toUpperCase();
    });
}
function error() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(success, error);
