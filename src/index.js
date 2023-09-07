import "./styles/main.scss";

const citySpan = document.getElementById("city");
const countrySpan = document.getElementById("country");
const conditionSpan = document.getElementById("condition");
const tempSpan = document.getElementById("temp");
const feelsLikeSpan = document.getElementById("feelsLike");
const humiditySpan = document.getElementById("humidity");
const windSpan = document.getElementById("wind");
const submit = document.getElementById("submit");
const api = "https://api.weatherapi.com/v1/current.json?key=";
const key = "55b3c11093064129922104657230409";

let farOrCelc = 0;
// show feels like, condition.text, humidity, temp, wind, country and city!
async function getWeather(api, key, input) {
  const url = api + key + "&q=" + input;
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    citySpan.innerText = data.location.name;
    countrySpan.innerText = data.location.country;
    conditionSpan.innerText = data.current.condition.text;
    tempSpan.innerText = data.current.temp_c + " C";
    feelsLikeSpan.innerText = "Feels like " + data.current.feelslike_c + " C";
    humiditySpan.innerText = "Humidity " + data.current.humidity;
    windSpan.innerText = data.current.gust_kph + " kph";
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

submit.addEventListener("click", () => {
  const input = document.getElementById("findCity").value;
  console.log(input);
  getWeather(api, key, input);
});
