const windChill = document.getElementById("wind-chill");

// Calculates the windchill in Farenheit and returns the value
function calculateWindChill(temperature, windSpeed)
{
    return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + ((0.4275 * temperature) * (windSpeed ** 0.16))
}

let temperature = 30;
let windSpeed = 25;

if (temperature <= 50 && windSpeed > 3)
{
    windChill.textContent += calculateWindChill(temperature, windSpeed).toFixed(2);
}
else
{
    windChill.textContent += "N/A"
}