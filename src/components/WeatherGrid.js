import React from "react";

const WeatherGrid = ({ weather }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <section className="weatherResults">
      <div className="weatherResultTop">
        <div className="data">{dateBuilder(new Date())}</div>
        <span>
          {" "}
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
        </span>
        <div className="weatherMain">
          <img
            src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}`}
            alt="icon"
            className="weatherIcon"
          />

          <h1>
            {" "}
            {Math.round(weather.main.temp)}
            <span className="degree">°C</span>
          </h1>
        </div>
        <h2 className="weatherDescription">{weather.weather[0].description}</h2>
      </div>

      <div className="weatherResultBottom">
        <div className="humidity">
          <span>Humidity</span>
          <h6>{weather.main.humidity} %</h6>
        </div>
        <div className="windspeed">
          <span>Windspeed</span>
          <h6>{weather.wind.speed} km/j</h6>
        </div>
      </div>
    </section>
  );
  //   return isLoaded ? (
  //     <h1>I'm loading</h1>
  //   ) : (
  //     <section className="weather results">
  //       <h2>{weather.name}</h2>
  //     </section>
  //   );
};

export default WeatherGrid;
