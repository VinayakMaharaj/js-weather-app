import axios from "axios";

//https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime

export function getWeather(lat, lon, timezone) {
  axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime",
    {
      params: {
        latitude: lat,
        longditude: lon,
        timezone,
      },
    }
  );
}
