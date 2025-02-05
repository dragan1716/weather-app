import { useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopCities from "./components/TopCities";
import VerticalMenu from "./components/VerticalMenu";
import Forecast from "./components/Forecast";
import {
  convertTemperature,
  fetchCityFromCoordinates,
  fetchWeather,
} from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C");
  const [city, setCity] = useState({ q: "Sarajevo" });
  const [isLoading, setIsLoading] = useState(true);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weather: ", error);
      }
    };
    getWeatherData();
  }, [city]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const cityName = await fetchCityFromCoordinates(
              latitude,
              longitude
            );
            setCity({ q: cityName });
          } catch (error) {
            console.error("Error fetching city name: ", error);
            alert("Unable to retreive city name.");
          }
        },
        (error) => {
          console.error("Error fetching location: ", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  console.log("Weather data:", weatherData);

  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Paris",
    },
    {
      id: 3,
      name: "Moscow",
    },
    {
      id: 4,
      name: "New York",
    },
    {
      id: 5,
      name: "Rio de Janeiro",
    },
  ];
  const temp = weatherData?.current?.main?.temp;
  const temperature =
    temp !== undefined && !isNaN(temp) ? convertTemperature(temp, unit) : null;

  let backgroundClass = "bg-gray-500";

  if (!isLoading && temperature !== null) {
    backgroundClass =
      temperature > 15
        ? "from-orange-500 to-red-500"
        : "from-cyan-600 to-blue-700";
  }

  return (
    <div
      className={`container md:px-20 lg:px-50 p-2 h-full max-w-full mx-auto py-5 bg-gradient-to-r ${backgroundClass} `}
    >
      <div className="">
        <TopCities cities={cities} onSetCity={setCity} />
        <VerticalMenu cities={cities} onSetCity={setCity} />
        <Inputs
          toggleUnit={toggleUnit}
          unit={unit}
          onSearch={setCity}
          getCurrentLocation={getCurrentLocation}
        />
        <TimeAndLocation weatherData={weatherData} />
        <TempAndDetails weatherData={weatherData} unit={unit} />
        <Forecast
          title="3 hour step forward"
          forecast={weatherData?.forecast?.hourly}
          unit={unit}
        />
        <Forecast
          title="daily forecast"
          forecast={weatherData?.forecast?.daily}
          unit={unit}
        />
      </div>
    </div>
  );
}

export default App;
