const today = new Date();


const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperature = 27;       
const windSpeed = 6.44;  

function calculateWindChillCelsius(tempC, speedKmh) {
    if (tempC <= 10 && speedKmh > 4.8) {
        const chill = 13.12 + 0.6215 * tempC
                    - 11.37 * Math.pow(speedKmh, 0.16)
                    + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
        return chill.toFixed(2); 
    } else {
        return "N/A"; 
    }
}

      

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temperature").textContent = temperature + " °C";
    document.getElementById("wind").textContent = windSpeed + " km/h";
    document.getElementById("windchill").textContent = calculateWindChillCelsius(temperature, windSpeed) + " °C";
});