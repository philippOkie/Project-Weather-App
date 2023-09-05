import "./styles/main.scss";

const api = "https://api.weatherapi.com/v1/current.json?key=";
const key = "55b3c11093064129922104657230409";
const city = "&q=" + "Kiev";
const url = api + key + city;

async function getWeather() {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getWeather();
