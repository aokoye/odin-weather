import './styles.css';
import { getWeather, displayWeather } from './weather';

let newLocation = 'portland';
getWeather(newLocation);
displayWeather();
