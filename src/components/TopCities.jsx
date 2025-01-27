export default function TopCities({ cities }) {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center items-center text-white">
        {cities.map((city) => (
          <button className="p-3 font-medium color" key={city.id}>
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
