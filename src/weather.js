const weatherArray = [];
let newLocation = '';

export async function displayWeather() {
  const location = document.getElementById('location');
  const newLocation = document.createElement('h1');
  const temp = document.getElementById('temp');
  temp.className = 'f';
  const newTemp = document.createElement('p');
  const feel = document.getElementById('feels-like');
  feel.className = 'f';
  const newFeel = document.createElement('p');
  const description = document.getElementById('description');
  const newDescription = document.createElement('p');

  const icon = document.getElementById('icon');
  const image = document.createElement('img');

  setTimeout(() => {
    newLocation.textContent = weatherArray[0];
    newTemp.textContent = 'Temperature: ' + weatherArray[1] + '\u2109';
    newFeel.textContent = 'Feels like: ' + weatherArray[2] + '\u2109';
    newDescription.textContent = weatherArray[3];

    async function imageFill() {
      const imageTitle = weatherArray[4];

      return (image.src = await import(`./icon/${imageTitle}.svg`).then(
        (mod) => mod.default
      ));
    }

    imageFill();
    icon.appendChild(image);
  }, 1000);

  location.appendChild(newLocation);
  temp.appendChild(newTemp);
  feel.appendChild(newFeel);
  description.appendChild(newDescription);
  console.log(weatherArray);
}

export async function getWeather(newLocation) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newLocation}/?key=ZA2L8J2JH6VWH96UPLELXJPCG`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.resolvedAddress);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.currentConditions.icon);
    console.log(weatherData.description);

    weatherArray.push(weatherData.resolvedAddress);
    weatherArray.push(weatherData.currentConditions.temp);
    weatherArray.push(weatherData.currentConditions.feelslike);
    weatherArray.push(weatherData.currentConditions.conditions);
    weatherArray.push(weatherData.currentConditions.icon);
    weatherArray.push(weatherData.description);

    return weatherArray;
  } catch (error) {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/portland/?key=ZA2L8J2JH6VWH96UPLELXJPCG',
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.resolvedAddress);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.currentConditions.icon);
    console.log(weatherData.description);

    weatherArray.push(weatherData.resolvedAddress);
    weatherArray.push(weatherData.currentConditions.temp);
    weatherArray.push(weatherData.currentConditions.feelslike);
    weatherArray.push(weatherData.currentConditions.conditions);
    weatherArray.push(weatherData.currentConditions.icon);
    weatherArray.push(weatherData.description);

    console.log('Enter a city.');
    console.log(error);
  }
}

// export async function displayWeather() {
//   const location = document.getElementById('location');
//   const newLocation = document.createElement('h1');
//   const temp = document.getElementById('temp');
//   const newTemp = document.createElement('p');
//   const feel = document.getElementById('feels-like');
//   const newFeel = document.createElement('p');
//   const description = document.getElementById('description');
//   const newDescription = document.createElement('p');

//   const icon = document.getElementById('icon');
//   const image = document.createElement('img');

//   setTimeout(() => {
//     newLocation.textContent = weatherArray[0];
//     newTemp.textContent = weatherArray[1];
//     newFeel.textContent = 'Feels like: ' + weatherArray[2];
//     newDescription.textContent = weatherArray[3];

//     async function imageFill() {
//       const imageTitle = weatherArray[4];

//       return (image.src = await import(`./icon/${imageTitle}.svg`).then(
//         (mod) => mod.default
//       ));
//     }

//     imageFill();
//     icon.appendChild(image);
//   }, 1000);

//   location.appendChild(newLocation);
//   temp.appendChild(newTemp);
//   feel.appendChild(newFeel);
//   description.appendChild(newDescription);
//   console.log(weatherArray);
// }

function clearWeather() {
  const location = document.getElementById('location');
  const temp = document.getElementById('temp');
  const feel = document.getElementById('feels-like');
  const description = document.getElementById('description');
  const icon = document.getElementById('icon');

  location.innerHTML = '';
  temp.innerHTML = '';
  feel.innerHTML = '';
  description.innerHTML = '';
  icon.innerHTML = '';
}

const searchBtn = document.getElementById('search-btn');
const searchField = document.getElementById('search');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  newLocation = searchField.value;
  console.log(newLocation);

  clearWeather();
  weatherArray.length = 0;
  getWeather(newLocation);
  displayWeather();
});

const tempConvBtn = document.getElementById('temp-convert');

tempConvBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const temp = document.getElementById('temp');
  const newTemp = document.createElement('p');
  const feel = document.getElementById('feels-like');
  const newFeel = document.createElement('p');

  let tempF = weatherArray[1];
  let feelF = weatherArray[2];
  let tempC = Math.round(((tempF - 32) / 1.8) * 10) / 10;
  let feelC = Math.round(((feelF - 32) / 1.8) * 10) / 10;

  if (temp.className == 'f') {
    temp.innerHTML = '';
    feel.innerHTML = '';
    newTemp.textContent = 'Temperature: ' + tempC + '\u2103';
    temp.className = 'c';
    newFeel.textContent = 'Feels like: ' + feelC + '\u2103';
    feel.className = 'c';
  } else {
    temp.innerHTML = '';
    feel.innerHTML = '';
    newTemp.textContent = 'Temperature: ' + weatherArray[1] + '\u2109';
    temp.className = 'f';
    newFeel.textContent = 'Feels like: ' + weatherArray[2] + '\u2109';
    feel.className = 'f';
  }

  temp.appendChild(newTemp);
  feel.appendChild(newFeel);
});
