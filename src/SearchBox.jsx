import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_KEY = import.meta.env.VITE_API_KEY;

    let URL = "https://api.openweathermap.org/data/2.5/weather";



    let handleCityChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("")
            let newInfo = await getInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }

    }
    let getInfo = async () => {
        try {
            let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                rempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
                ,
            }

            return result;
        } catch (err) {
            throw err;
        }

    }
    return (
        <div className='searchbox'>
            <h3>Search fo the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" name="city" value={city} onChange={handleCityChange} required />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {error && <h4 style={{ color: "red" }}>No such place in our API! </h4>}
        </div>

    );
}