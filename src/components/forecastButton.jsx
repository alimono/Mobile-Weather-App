import { useState } from "react";


const ForecastButton = ({ location }) => {
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);
    
    const API_key = import.meta.env.VITE_WEATHER_API_KEY; //Open Weather API key from .env file
    const countryCode = 'GB'; //Weather for UK cities only 

    //fetch day 5 day forecast data from OpenWeather API, incl. error handling / updates every hour
    const fetchForecastData = async () => {
        const cityName = location.trim();
        if (!cityName) return; //do nothing if input is empty

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${API_key}&units=metric`);
            if (!response.ok) {
                throw new Error("No forecast data found");
            }
            const data = await response.json();

            console.log(data); //log data to check structure

            const dailyForecast = {}; // Placeholder for actual forecast data, 1 result per day

            //JSON response produces 40 results per day, loop over these to extract daily min/max temps and weather conditions
            data.list.forEach((entry) => {
                const date = entry.dt_txt.split(" ")[0]; //date as object key
                //store results if none already for that date
                if (!dailyForecast[date]) {
                    dailyForecast[date] = {
                        date,
                        min: entry.main.temp_min,
                        max: entry.main.temp_max,
                        icon: entry.weather[0].icon,
                        description: entry.weather[0].description
                    };
                } else {
                    dailyForecast[date].min = Math.min(dailyForecast[date].min, entry.main.temp_min);
                    dailyForecast[date].max = Math.max(dailyForecast[date].max, entry.main.temp_max);  
                }
            });

            //convert result object to array and return first 5 days
            const fiveDayForecast = Object.values(dailyForecast).slice(0, 5);

            //select icon at noon for each day
            fiveDayForecast.forEach((day) => {
                const noonEntry = data.list.find((entry) => entry.dt_txt.startsWith(day.date) && entry.dt_txt.includes("12:00:00"));
                if (noonEntry) {
                    day.icon = noonEntry.weather[0].icon;
                    day.description = noonEntry.weather[0].description;
                }
            });

            setForecastData(fiveDayForecast);
            setError(null); //clear previous errors

        } catch (err) {
            setError(err.message);
            setForecastData(null); //clear previous data
        }
    };

    //fetch weather data on Enter key press
    const handleCLick = () => {
            fetchForecastData();
    };

    return (
        <div className="forecast-button-container">
            <div className="button-wrapper">
                <button className="forecast-button" onClick={handleCLick}>Get Five Day Forecast</button>
            </div>
            {error && (<div className="error-message">{error}</div>)}
            
            {forecastData && (
                <div className="five-day-forecast">
                    <h2>5-Day Forecast</h2>
                    <div className="forecast-cards">
                        {forecastData.map((day) => (
                            <div key={day.date} className="forecast-card">
                                <h3>{day.date}</h3>
                                <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} />
                                <p>{day.description}</p>
                                <p>High: {Math.round(day.max)} °C</p>
                                <p>Low: {Math.round(day.min)} °C</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        
    );
}

export default ForecastButton;