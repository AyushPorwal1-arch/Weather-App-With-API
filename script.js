async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "faa11b4067beca1a82d1c7b110f9be40";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);

        let data = await response.json();

        if (data.cod == "404") {

            document.getElementById("weatherResult").innerHTML =
            "<h2>❌ City Not Found</h2>";

        } else {

            let icon = "☀️";

            if (data.weather[0].main == "Clouds") {
                icon = "☁️";
            }

            else if (data.weather[0].main == "Rain") {
                icon = "🌧️";
            }

            else if (data.weather[0].main == "Snow") {
                icon = "❄️";
            }

            document.getElementById("weatherResult").innerHTML =

            `
            <div class="weather-card">

                <h2>${data.name}</h2>

                <div class="temp">
                    ${data.main.temp}°C
                </div>

                <div class="weather-icon">
                    ${icon}
                </div>

                <div class="details">

                    <div class="detail-box">
                        <h4>Weather</h4>
                        <p>${data.weather[0].main}</p>
                    </div>

                    <div class="detail-box">
                        <h4>Humidity</h4>
                        <p>${data.main.humidity}%</p>
                    </div>

                    <div class="detail-box">
                        <h4>Wind</h4>
                        <p>${data.wind.speed} km/h</p>
                    </div>

                </div>

            </div>
            `;
        }

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
        "<h2>⚠️ Something Went Wrong</h2>";
    }
}