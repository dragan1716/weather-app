import { DateTime } from "luxon";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { convertTemperature } from "../services/weatherService";

export default function TempAndDetails({ weatherData, unit }) {
  const temp = weatherData?.current?.main?.temp;
  const feels_like = weatherData?.current?.main?.feels_like;
  const temp_max = weatherData?.current?.main?.temp_max;
  const temp_min = weatherData?.current?.main?.temp_min;
  const sunrise = weatherData?.current?.sys?.sunrise;
  const sunset = weatherData?.current?.sys?.sunset;
  const timezone = weatherData?.current?.timezone;

  const temperature = convertTemperature(temp, unit);
  const realFeel = convertTemperature(feels_like, unit);
  const tempMax = convertTemperature(temp_max, unit);
  const tempMin = convertTemperature(temp_min, unit);

  const formatToLocalTime = (seconds, offset, format = "hh:mm a") =>
    DateTime.fromSeconds(seconds + offset, { zone: "utc" }).toFormat(format);

  const formattedSunriseTime = formatToLocalTime(sunrise, timezone);
  const formattedSunsetTime = formatToLocalTime(sunset, timezone);

  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${realFeel}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Himidity",
      value: `${weatherData?.current?.main?.humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${weatherData?.current?.wind?.speed.toFixed(0)} km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: `${formattedSunriseTime}`,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: `${formattedSunsetTime}`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${tempMax}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${tempMin}°`,
    },
  ];

  return (
    <div className="pb-10">
      <div className="pt-4">
        <p className="text-center text-cyan-300 md:text-3xl">
          {weatherData?.current?.weather?.[0]?.main}
        </p>
      </div>
      <div className="flex justify-between items-center py-10">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.current?.weather[0]?.icon}@2x.png`}
            alt={weatherData?.current?.weather[0]?.description}
            className="mx-auto w-20 h-20"
          />
        </div>
        <div className="text-5xl">
          {temperature}° {unit}
        </div>
        <div>
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex items-center">
              <Icon size={18} />
              <p className="font-extralight ml-2 text-sm md:text-lg">
                {title}: <span className="font-medium">{value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center justify-center gap-2">
            <Icon size={30} />
            <p className="font-extralight">
              {title}: <span className="font-medium">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
