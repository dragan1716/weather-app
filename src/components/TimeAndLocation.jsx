import { DateTime } from "luxon";

export default function TimeAndLocation({ weatherData }) {
  const formatToLocalTime = (
    seconds,
    offset,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(seconds + offset, { zone: "utc" }).toFormat(format);

  const formattedLocalTime = formatToLocalTime(
    weatherData?.current?.dt,
    weatherData?.current?.timezone
  );

  return (
    <div>
      <p className="text-center text-sm sm:text-lg font-extralight">
        {formattedLocalTime}
      </p>
      <p className="text-center text-[30px] md:text-[50px] font-semibold">
        {weatherData?.current?.name}, {weatherData?.current?.sys?.country}
      </p>
    </div>
  );
}
