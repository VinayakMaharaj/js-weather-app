import "./style.css";
import { getWeather } from "./weather";

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert("Error getting weather.");
  });

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  // renderDailyWeather(daily)
  // renderHourlyWeather(hourly)
  document.body.classList.remove("blurred");
}

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function renderCurrentWeather(current) {
  document.querySelector("[data-current-temp]").textContent =
    current.currentTemp;
}
