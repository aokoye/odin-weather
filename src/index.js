import './styles.css';
import { getWeather, displayWeather, weatherArray } from './weather';

// window.addEventListener('load', (event) => {
//   console.log('I finished!');
// });

// document.addEventListener('readystatechange', (e) => {
//   if (window.readyState === 'complete') {
//     console.log('I finished!');
//   }
// });

function loading() {
  if (weatherArray < 1) {
    console.log('Loading...');
  }
}

loading();
let newLocation = 'portland';
getWeather(newLocation);
displayWeather();
