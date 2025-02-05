export default function TopCities({ cities, onSetCity }) {
  console.log(cities);

  return (
    <div className="hidden md:block">
      <div className="flex justify-center items-center text-white md:gap-4">
        {cities.map((city) => (
          <button
            onClick={() => {
              onSetCity({ q: city.name });
            }}
            className="p-3 font-semibold color cursor-pointer hover:text-gray-300 md:text-2xl"
            key={city.id}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
