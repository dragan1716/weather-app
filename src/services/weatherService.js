const apiKey = import.meta.env.VITE_API_KEY;
const apiURL_DEFAULT = import.meta.env.VITE_API_URL_DEFAULT;
const apiURL_FORECAST = import.meta.env.VITE_API_URL_FORECAST;

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${apiURL_DEFAULT}?q=${city.q}&appid=${apiKey}`
    );
    const data = await response.json();

    const forecastResponse = await fetch(
      `${apiURL_FORECAST}?q=${city.q}&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();

    // Extract hourly forecast (next 5 intervals)
    const hourly = forecastData?.list.slice(0, 5).map((item) => ({
      temp: item?.main?.temp,
      title: new Date(item?.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      icon: `http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`,
      date: item?.dt_txt,
    }));

    // Extract daily forecast (get one entry per day at 12:00 PM)
    const daily = forecastData.list
      .filter((item) => item.dt_txt.includes("12:00:00"))
      .map((item) => ({
        temp: item.main.temp,
        title: new Date(item.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        date: item.dt_txt,
      }));

    return { current: data, forecast: { hourly, daily } };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCityFromCoordinates = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
    );
    const data = await response.json();
    return data.name;
  } catch (error) {
    throw new Error("Error fetching city name: ", error.message);
  }
};

export const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(0);
export const kelvinToFahrenheit = (temp) =>
  (((temp - 273.15) * 9) / 5 + 32).toFixed(0);

export const convertTemperature = (temp, unit) =>
  unit === "C" ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
