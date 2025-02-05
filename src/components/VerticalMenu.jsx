import { useEffect, useRef, useState } from "react";

export default function VerticalMenu({ cities, onSetCity }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="bg-gray-2 dark:bg-dark md:hidden">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="mb-3.5 text-black inline-flex h-12 items-center justify-center gap-2 rounded-lg  bg-white px-6 py-3 text-base font-medium text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            >
              Top cities
              <span
                className={`duration-100 ${dropdownOpen ? "-scale-y-100" : ""}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 text-black  top-full w-[240px] divide-y divide-stroke overflow-hidden rounded-lg bg-white dark:divide-dark-3 dark:bg-dark-2 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              {cities.map((city) => (
                <div key={city.id} className="">
                  <a
                    onClick={() => {
                      onSetCity({ q: city.name });
                    }}
                    href="#0"
                    className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-200 dark:text-white dark:hover:bg-white/5"
                  >
                    {city.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
