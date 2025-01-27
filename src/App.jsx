import "./App.css";
import TopCities from "./components/TopCities";
import VerticalMenu from "./components/VerticalMenu";

function App() {
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
  return (
    <>
      <div className="py-5 bg-gradient-to-r from-cyan-600 to-blue-700 h-screen">
        <div>
          <TopCities cities={cities} />
          <VerticalMenu cities={cities} />
        </div>
      </div>
    </>
  );
}

export default App;
