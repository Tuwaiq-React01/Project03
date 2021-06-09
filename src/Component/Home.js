import React, {useState, useEffect} from 'react';
import WeaterData from './weatherapi';

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Dammam');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
        setLoading(true);
        const data = await WeaterData(city);
        setWeatherData(data);
        setLoading(false);
    }catch(error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
   <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
        <div className="search-form">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button  onClick={() => getData()}>Search</button>
        </div>
      
          {weatherdata !== null ? (
          <div className="main-container">
            <h4>Live Weather Condition</h4>
            <div className="weather-icon">
              <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} />
            </div>
            <h3>{weatherdata.weather[0].main}</h3>
            <div className="temprature">
              <h1>{(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            <div className="location">
              <h3><i className="View"></i>{weatherdata.name} || {weatherdata.sys.country}</h3>
            </div>
            <div className="temprature-range">
              <h6>  Humidity: {weatherdata.main.humidity}%</h6>
              <h6> feels like : {weatherdata.main.feels_like}</h6>
              <h6> Pressure : {weatherdata.main.pressure}</h6>
            </div>
        </div>
        ): null}
          
      </div>
    </div>
  );
}

export default App