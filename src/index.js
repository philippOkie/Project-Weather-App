import "./styles/main.scss";

const citySpan = document.getElementById("city");
const countrySpan = document.getElementById("country");
const conditionSpan = document.getElementById("condition");
const tempSpan = document.getElementById("temp");
const feelsLikeSpan = document.getElementById("feelsLike");
const humiditySpan = document.getElementById("humidity");
const windSpan = document.getElementById("wind");
const submit = document.getElementById("submit");
const input = document.getElementById("findCity");
const form = document.getElementById("form");

const api = "https://api.weatherapi.com/v1/current.json?key=";
const key = "55b3c11093064129922104657230409";
const city = "kiev";
const url = api + key + "&q=" + city;
let farOrCelc = 0;
// show feels like, condition.text, humidity, temp, wind, country and city!
async function getWeather() {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      if (response.status === 400) {
        console.error(
          "Bad Request: The server did not understand the request."
        );
      } else {
        console.log("Please try again!");
      }
    }
  } catch (error) {
    console.error(error);
  }
}

getWeather();
