// Use the current year as copyright year.
document.getElementById("year").textContent = new Date().getFullYear();
// Find the date of the last modification
const lastMod = new Date(document.lastModified);
document.getElementById("last-mod").textContent =lastMod.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});
function kmhToMph(kmh) {
  return kmh * 0.621371;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
function calculateWindChill(tempF, windMph) {
   
    

    // NWS wind chill formula (in °F)
    const wcF = 35.74 
        + (0.6215 * tempF)
        - (35.75 * Math.pow(windMph, 0.16))
        + (0.4275 * tempF * Math.pow(windMph, 0.16));

    return wcF; 
}

// Set the data-condition attribute of the weather element to "sunny"
const weatherEl = document.querySelector('div.weather');
if (weatherEl) {
  weatherEl.dataset.condition = "rain";
  console.log(weatherEl);
  console.log(weatherEl.dataset.condition);
  // Set the data-temp attribute of the weather element to 29
  weatherEl.dataset.temp = -2;
  // Set the data-wind attribute of the weather element to 9
  weatherEl.dataset.wind = 9;
  // Set the data-waves attribute of the weather element to 2
  weatherEl.dataset.waves = 2;
  // Set the data-humidity attribute of the weather element to 50
  weatherEl.dataset.humidity = 88;
  // Calculate the data-windchill attribute of the weather element

  // Convert Celsius → Fahrenheit
  const tempF = celsiusToFahrenheit(Number(weatherEl.dataset.temp));
  // Convert km/h → mph
  const windMph = kmhToMph(Number(weatherEl.dataset.wind));
  // Wind chill only applies under these conditions
  let chill;
  if (tempF > 50 || windMph < 3) {
      chill= "N/A";} // No wind chill effect
  else {
      chill = fahrenheitToCelsius(calculateWindChill(tempF, windMph)).toFixed(0)+"°C";
  }
  weatherEl.dataset.windchill = chill
  document.getElementById("temp").textContent = weatherEl.dataset.temp + "°C";
  document.getElementById("humidity").textContent = weatherEl.dataset.humidity + "%";
  document.getElementById("wind").textContent = weatherEl.dataset.wind + " km/h";
  document.getElementById("windchill").textContent = weatherEl.dataset.windchill ;
  document.getElementById("waves").textContent = weatherEl.dataset.waves + " m";
}