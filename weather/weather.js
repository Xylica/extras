async function loadWeather()
{
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,is_day&timezone=Pacific%2FAuckland");
    const weather = await res.json();
    const body = document.querySelector("body")

    let temp = weather.hourly.temperature_2m[0];
    let time = weather.hourly.time[0];

    /*for(temps of weather.hourly.temperature_2m)
    {
        temp += `<li>${temps}</li>`
    }

    for(times of weather.hourly.time)
        {
            time += `<li>${times}</li>`
        }*/

    body.innerHTML = `
    <div class = "latitude">
    <h2>Latitude</h2>
    <p>${weather.latitude}</p>
    </div>
    <div class = "longitude">
    <h2>Longitude</h2>
    <p>${weather.longitude}</p>
    </div>
    <div class = "temperature">
    <h2>Temperature</h2>
    <ul>${temp}</ul>
    </div>
    <div class = "times">
    <h2>Times</h2>
    <ul>${time}</ul>
    </div>
    `;
}

loadWeather();
