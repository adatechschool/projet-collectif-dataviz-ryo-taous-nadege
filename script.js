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
              console.log(data);
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
              document.querySelector(".description").innerHTML =
                data.weather[0].description;

              const weather = data.weather[0].description;
              console.log(weather);
              let drawElement = document.querySelector(".draw");

              switch (weather) {
                case "ciel dégagé":
                  console.log("Ciel dégagé condition reached");
                  drawElement.classList.add("soleilIcon");
                  break;
                case "partiellement nuageux":
                  console.log("partiellement nuageux condition reached");
                case "peu nuageux":
                  console.log("peu nuageux condition reached");
                  drawElement.classList.add("eclairciesIcon");
                  break;
                case "couvert":
                  console.log("couvert condition reached");
                case "nuageux":
                  console.log("nuageux condition reached");
                  drawElement.classList.add("nuageuxIcon");
                  break;
                case "brume":
                  console.log("brume condition reached");
                  drawElement.classList.add("brumeIcon");
                  break;
                case "orage":
                  console.log("orage condition reached");
                  drawElement.classList.add("orageIcon");
                  break;
                default:
                  drawElement.innerHTML = `Sorry, "${weather}" is too complicated to draw !`;
                  break;
              }
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

//ANIMATION PLUIE :

//EN DERNIER : une fois que toute la logique fonctionne, la mettre dans une fonction globale :
const rainMaker = () => {
  // CREATION D'ELEMENT EN JS (injecter une balise) : createElement :
  const rain = document.createElement("span");

  // Ajouter la classe crée en CSS pour lui donner le style voulu (add = ajouter, toggle =la mettre si elle n'y est pas, remove = retirer):
  rain.classList.add("rain");

  //Dire au body qu'il a un nouvel enfant :
  document.body.appendChild(rain);

  //Randomiser la taille des gouttes (entre 5 et 10px)
  const size = Math.random() * 10 + 5 + "px";
  rain.style.height = size;
  rain.style.width = "1.5px";

  //Randomiser son positionnement haut-bas :
  rain.style.top = Math.random() * 100 - 90 + "%";
  rain.style.left = Math.random() * 100 + "%";

  //Supprimer les gouttes du DOM au bout de 3s :
  setTimeout(() => {
    rain.remove();
  }, 3000);
};

//Se servir de l'asynchrone (setInterval) pour créer des gouttes toutes les x secondes :
setInterval(rainMaker, 30);

/*function celciusToFarenheit(celcius) {
  /*add variable for data.main.temp to convert celcius into farenheit//
    let celciusTemperature = data.main.temp*/
/*const farenheit = (celcius * 9/5) + 32
  return farenheit
}*/
//CONVERTIR LES DEGRES EN FAHRENHEIT :
// (x°F − 32) × 5/9 =  °C
// (x°C × 9/5) + 32 =  °F

//Créer un bouton : quand on clique, conversion en fahrenheit
//Le texte change
//Quand on re-clique, conversion en degrés
