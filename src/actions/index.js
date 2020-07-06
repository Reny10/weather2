import axios from 'axios';

const API_KEY = '81b01d090d8c82d29b8e7ff21f34afdc';
const rootURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city){
    const url = `${rootURL}&q=${city}`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload:request
    }
}
