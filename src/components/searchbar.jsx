import { useState } from "react";

const SearchBar = () => {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    
    const API_key = import.meta.env.VITE_WEATHER_API_KEY; //Open Weather API key from .env file
    console.log("API Key:", API_key);
    const countryCode = 'GB'; //Weather for UK cities only 

    //fetch weather data from OpenWeather API, incl. error handling
    const fetchWeatherData = async () => {
        const cityName = location.trim();
        if (!cityName) return; //do nothing if input is empty

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${API_key}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null); //clear previous errors

        } catch (err) {
            setError(err.message);
            setWeatherData(null); //clear previous data
        }
    };

    //fetch weather data on Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchWeatherData();
        }
    };

    return (
        <div className="search-bar-container">
            <div className="input-wrapper">
                {/*Click search icon to fetch weather data*/}
                <i className="f7-icons search-icon" onClick={fetchWeatherData} style={{cursor: "pointer"}}>
                    search
                </i>
                {/*Update location state on input change*/}
                <input className="input-field" placeholder="Type in your city" value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={handleKeyPress} />
            </div>
            {error && (<div className="error-message">{error}</div>)}
            
            {weatherData && (
                <div className="weather-results">
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {Math.round(weatherData.main.temp)} °C</p>
                    <p>Feels like: {Math.round(weatherData.main.feels_like)} °C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind speed: {weatherData.wind.speed} m/s</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
                </div>
            )}
        </div>
        
    );
}

export default SearchBar;