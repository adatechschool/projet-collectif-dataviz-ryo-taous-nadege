const APIKEY = "76d589c11f8de1e3e9b8dd346d698ce3";

//function Celsius to Fahrenheit
let isCelcius = true;
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function apiCall(city) {
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
                (isCelcius
                  ? data.main.temp + " °C"
                  : celciusToFahrenheit(data.main.temp).toFixed(2) + " °F");

              document.querySelector(".humidity").innerHTML =
                '<i class="fa-solid fa-droplet"></i>' +
                data.main.humidity +
                " %";
              document.querySelector(".wind").innerHTML =
                '<i class="fa-solid fa-wind"></i>' + data.wind.speed + " km/h";
              document.querySelector(".description").innerHTML =
                data.weather[0].description;
              console.log(data.weather);

              let weather = data.weather[0].description;

              let drawElement = document.querySelector(".draw");
              let activityElement = document.querySelector(".activity");
              drawElement.className = "draw";
              activityElement.className = "activity";
              console.log(activityElement);

              switch (weather) {
                case "ciel dégagé":
                  drawElement.classList.add("soleilIcon");
                  activityElement.innerHTML = `C'est une belle journée pour une une randonnée ou une sortie dans la nature !
                  <iframe src="https://giphy.com/embed/3oxRmGNqKwCzJ0AwPC" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://www.visorando.com/">Besoin d'idées ?</a>`;
                  break;
                case "partiellement nuageux":
                case "peu nuageux":
                  drawElement.classList.add("eclairciesIcon");
                  activityElement.innerHTML = `Que diriez-vous d'aller prendre un verre en terrasse ou vous promener à vélo ? 
                  <iframe src="https://giphy.com/embed/xT0GqrJNbZkRcr2Jgc" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://www.routard.com/contenu-dossier/cid136660-velo-pistes-cyclables-en-france.html">A bicyclette...</a>`;
                  break;
                
                case "couvert":
                case "nuageux":
                  drawElement.classList.add("nuageuxIcon");
                  activityElement.innerHTML = `C'est un bon moment pour parfaire votre culture ! 
                  <iframe src="https://giphy.com/embed/fvxQJ3BUUuqU1E8IM3" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                  <a href="https://www.museemusee.com/les-musees-de-france-par-departement.html">Visitez un musée ou une galerie d'art</a>`;
                  break;
                  
                case "brume":
                  drawElement.classList.add("brumeIcon");
                  activityElement.innerHTML = `Profitez-en pour organiser un cache-cache géant !
                  <iframe src="https://giphy.com/embed/V1NxC1YoNEHBe" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
                  break;
                case "pluie":
                case "légère pluie":
                case "bruine légère":
                case "pluie modérée":
                  setInterval(rainMaker, 30);
                  drawElement.classList.add("pluieIcon");
                  activityElement.innerHTML = `Une belle journée pour aller au cinéma ou faire du shopping ! 
                  <iframe src="https://giphy.com/embed/EqjqXkrEb9XNEJam1A" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                  <a href="https://www.allocine.fr/">Salé ou sucré ?</a>`;
                  break;
                case "orage":
                  drawElement.classList.add("orageIcon");
                  activityElement.innerHTML = `C’est le moment idéal pour se blottir sur le canapé avec un plaid et regarder ce film ou cette série que vous avez toujours voulu voir.
                  <iframe src="https://giphy.com/embed/GNemRsUSi5Ti9ZPpBZ" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> 
                  <a href="https://www.netflix.com/fr/">& Chill.</a>`;
                  break;
                case "légères chutes de neige":
                case "neige":
                case "fortes chutes de neige":
                  drawElement.classList.add("neigeIcon");
                  activityElement.innerHTML = `Sortez la luge !! 
                  <iframe src="https://giphy.com/embed/Mn2RSnhSpW81M5qgqJ" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                  <a href="https://fr-fr.topographic-map.com/map-cz/France-m%C3%A9tropolitaine/">Trouvez le dénivelé le plus proche de chez vous !</a>`;
                  break;
                default:
                  drawElement.innerHTML = `Sorry, "${weather}" is too complicated to draw !`;
                  activityElement.innerHTML = `<iframe src="https://giphy.com/embed/l378giAZgxPw3eO52" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
                  break;
              }
            })
          );
        }
      })
    )
    .catch((err) => console.log("Erreur : " + err));
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.getElementById("inputCity").value;

  apiCall(ville);
});

document.getElementById("convert").addEventListener("click", function () {
  isCelcius = !isCelcius;
  let ville = document.getElementById("inputCity").value;
  apiCall(ville);
});

apiCall("Paris");
//ANIMATION PLUIE :
//EN DERNIER : une fois que toute la logique fonctionne, la mettre dans une fonction globale :
/*const rainMaker = () => {
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
// setInterval(rainMaker, 30);

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
<<<<<<< HEAD
// setInterval(rainMaker, 30);
*/
