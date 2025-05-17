import './styles.css';
import { getWeather, displayWeather } from './weather';

import thunder from './icon/thunderstorms-extreme-snow.svg';

// const icon = document.getElementById('icon');
// const image = document.createElement('img');
// image.src = thunder;
// icon.appendChild(image);

getWeather();
displayWeather();
