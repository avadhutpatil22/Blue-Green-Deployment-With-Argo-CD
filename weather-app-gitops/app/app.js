const API_KEY = 'a98cb9907bac9c215e70f17c6eafc166';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please enter city name');
    return;
  }

  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (data.cod !== 200) {
    document.getElementById('result').innerHTML = 'City not found';
    return;
  }

  document.getElementById('result').innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}

fetch('/slot')
  .then(res => res.text())
  .then(slot => {
    document.getElementById('slot').innerHTML = `Running Slot: ${slot}`;
  });
