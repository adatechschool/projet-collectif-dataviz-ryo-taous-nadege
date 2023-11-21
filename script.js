const APIKEY = "76d589c11f8de1e3e9b8dd346d698ce3";

let apiCall = function (city) {
  let urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(urlLocation)
    .then((response) =>
      response.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          let lat = data[i].lat;
          let lon = data[i].lon;

          let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=fr`;

          fetch(urlWeather).then((response) =>
            response.json().then((data) => {
              document.querySelector(".city").innerHTML = data.name;
              document.querySelector(".temp").innerHTML =
                '<i class="fa-solid fa-temperature-half"></i>' +
                data.main.temp +
                " °C";
              document.querySelector(".humidity").innerHTML =
                '<i class="fa-solid fa-droplet"></i>' +
                data.main.humidity +
                " %";
              document.querySelector(".wind").innerHTML =
                '<i class="fa-solid fa-wind"></i>' + data.wind.speed + " km/h";
            })
          );
        }
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.getElementById("inputCity").value;

  apiCall(ville);
});

apiCall("Paris");
