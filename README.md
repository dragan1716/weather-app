# Weather App 🌦️
A modern and responsive weather application built with **React**, utilizing **HTML**, **CSS**, and **JavaScript**, and styled with **Tailwind CSS**. The app fetches real-time weather data from the **OpenWeather API** and delivers an intuitive user experience across all devices. 
## Live Demo: https://gentle-stardust-acd732.netlify.app/

## Features
### 🌐 Global and Local Weather Access
- **Popular Cities:** Quick access to weather data for popular cities like London, Paris, Moscow, and more. Clicking on a city dynamically fetches its weather data.
- **Search by City:** Users can search for any city to get detailed weather information.
- **Current Location:** Get weather data for your current location with a single click.

### 🌡️ Dynamic Weather Details
- **Temperature Units:** Switch seamlessly between Celsius (°C) and Fahrenheit (°F).
- **Real-Time Updates:** Weather icons, city and country names, and dynamic data like temperature, humidity, wind speed, and real feel are updated instantly via API.
- **Additional Weather Insights:**
  - Sunrise and Sunset times.
  - Daily highs and lows.
  - Current weather description (e.g., clouds, clear sky).

### 📅 Forecast Features
- **3-Hour Step Forecast:** View detailed temperature and weather conditions (with icons) for the next hours dynamically based on the selected city.
- **Daily Forecast:** Get a 5-day forecast with dynamically changing weather data and icons.

### 🖥️ Fully Responsive Design
- Built with **Tailwind CSS** for a sleek and responsive UI that works seamlessly on desktops, tablets, and mobile devices.

### 🖼️ Visual Enhancements
- Weather icons fetched directly from the API for a visually engaging user experience.
- Real-time date and time display, synchronized with the selected city's timezone.

## Technologies Used
- **React:** For building the UI and managing the app's dynamic data flow.
- **Tailwind CSS:** For responsive and modern styling.
- **OpenWeather API:** For fetching real-time weather data.
- **Geolocation API:** For accessing the user's current location.
  
#### How It Works
1. **Top Cities:** Select a predefined popular city to load its weather data.
2. **Search:** Enter any city name to fetch and display its weather details.
3. **Current Location:** Use the location button to retrieve weather data for your current position.
4. **Temperature Toggle:** Switch between °C and °F easily.
5. **Forecast:** Explore detailed 3-hour step and daily forecasts for any selected city.
   
## Installation and Setup
1. Clone the repository: git clone https://github.com/dragan1716/weather-app.git
2. Navigate to the project directory: cd weather-app
3. Install dependencies: npm install
4. Create a .env file and add your OpenWeather API key: VITE_API_KEY=your_api_key_here
5. Start the application: npm run dev








