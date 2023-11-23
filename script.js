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
              console.log(data)
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
                document.querySelector(".description").innerHTML =data.weather[0].description;
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

  let date = new Date();
// Obtenir le jour, le mois et l'année
  let jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  let jour = jours[date.getDay()];
//console.log(jour)
  let mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0 en JavaScript
//console.log(mois)
  let annee = date.getFullYear();
//console.log(annee)
// Obtenir l'heure et les minutes
  let heure = date.getHours();
//console.log(heure)
  let minute = date.getMinutes();

// Assembler la date et l'heure dans le format souhaité
  let dateEtHeure = '<strong style="font-size:2em;">' + jour + '</strong><br>' + date.getDate() + '/' + mois + '/' + annee + ' '+'<br>'+ heure + ':' + minute;

// Afficher la date et l'heure
  document.getElementById("current_date").innerHTML = dateEtHeure;