const weatherArray = [];
export async function getWeather() {
  try {
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

export async function displayWeather() {
  const location = document.getElementById('location');
  const newLocation = document.createElement('h1');
  const temp = document.getElementById('temp');
  const newTemp = document.createElement('p');
  const feel = document.getElementById('feels-like');
  const newFeel = document.createElement('p');
  const description = document.getElementById('description');
  const newDescription = document.createElement('p');

  const icon = document.getElementById('icon');
  const image = document.createElement('img');

  setTimeout(() => {
    newLocation.textContent = weatherArray[0];
    newTemp.textContent = weatherArray[1];
    newFeel.textContent = 'Feels like: ' + weatherArray[2];
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
