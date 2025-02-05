import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

export default function Inputs({
  toggleUnit,
  unit,
  onSearch,
  getCurrentLocation,
}) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input === "") {
      window.alert("Enter a city!");
    }
    onSearch({ q: input });
    setInput("");
  };

  return (
    <div className="block sm:flex justify-center items-center gap-5">
      <div className="py-5 flex gap-3 justify-center items-center">
        <div className="flex justify-center items-center">
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder="Search by city..."
            className="bg-white rounded py-2 mr-2 px-1 w-[250px] sm:w-[450px] focus:outline-none text-gray-600"
          />
          <BiSearch
            onClick={handleSearch}
            size={25}
            className="text-white cursor-pointer mr-2"
          />
          <BiCurrentLocation
            onClick={getCurrentLocation}
            size={25}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="text-white text-center md:ml-8">
        <p onClick={toggleUnit} className="text-2xl cursor-pointer font-medium">
          {unit === "C" ? "°C | °F" : "°F | °C"}
        </p>
      </div>
    </div>
  );
}
