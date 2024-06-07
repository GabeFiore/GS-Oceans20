import React, { useState, useEffect } from 'react';

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({
    city: 'São Paulo',
    temperature: '--°C',
    weatherDescription: 'Carregando...',
    tempMax: '--°C',
    tempMin: '--°C',
    wind: '-- km/h',
    humidity: '--%',
    visibility: '-- km'
  });

  const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
  const UNITS = 'metric';
  const lat = -23.5505;
  const long = -46.6333;

  useEffect(() => {
    const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;

    const fetchApi = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const temperature = (data.main.temp).toFixed(1);
      const tempMax = (data.main.temp_max).toFixed(1);
      const tempMin = (data.main.temp_min).toFixed(1);
      const windSpeed = (data.wind.speed * 3.6).toFixed(1); // Convert m/s to km/h

      setWeatherData({
        city: data.name,
        temperature: `${temperature}°C`,
        weatherDescription: data.weather[0].description,
        tempMax: `${tempMax}°C`,
        tempMin: `${tempMin}°C`,
        wind: `${windSpeed} km/h`,
        humidity: `${data.main.humidity}%`,
        visibility: `${(data.visibility / 1000).toFixed(1)} km`
      });
    };

    fetchApi(url);
  }, []);

  return (
    <div className="p-4 shadow-md text-center">
      <h1 className="text-lg font-bold text-white">{weatherData.city}</h1>
      <div className="text-2xl font-bold text-white">{weatherData.temperature}</div>
      
    </div>
  );
}

export default WeatherInfo;
