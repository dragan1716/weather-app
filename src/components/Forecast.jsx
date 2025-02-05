import { convertTemperature } from "../services/weatherService";

export default function Forecast({ forecast, title, unit }) {
  return (
    <div className="pb-10">
      <div>
        <p className="uppercase font-medium">{title}</p>
      </div>
      <hr />
      <div className="flex justify-between">
        {!forecast || forecast.length === 0 ? (
          <p>Loading...</p>
        ) : (
          forecast.map((item) => (
            <div className="flex flex-col items-center" key={item.title}>
              <p>{item.title}</p>
              <img className="w-12 my-1" src={item.icon} alt={item.title} />
              <p>{convertTemperature(item?.temp, unit)}°</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
