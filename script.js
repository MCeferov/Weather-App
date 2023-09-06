// ! HElnur

"use strict";

const input = document.querySelector(".search-bar");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const weat = document.querySelector(".weather");
const icon = document.querySelector(".icon");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const key = "5c1e801a98de55b805c069472e3bdc3a";

const getdata = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    if (!res.ok) {
      throw Error("Error 404");
    } else {
        weat.classList.remove("loading");
      document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${city}`;
    }
    const data = await res.json();
    displayValue(data);
  } catch (err) {
    weather.classList.add("loading");
  }
};

const displayValue = (data) => {
    city.textContent = `${data.name}`;
  temperature.textContent = `${data.main.temp} `;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  humidity.textContent = `Humidit ${data.main.humidity}%`;
  wind.textContent = `Wind speed: ${data.wind.speed}km`;
};

input.addEventListener("input", (e) => {
  getdata(e.target.value);
});
