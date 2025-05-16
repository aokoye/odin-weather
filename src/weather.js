export async function getWeather() {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/portland/?key=ZA2L8J2JH6VWH96UPLELXJPCG'
    );
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.resolvedAddress);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.description);
  } catch (error) {
    console.log('Enter a city.');
    console.log(error);
  }
}
