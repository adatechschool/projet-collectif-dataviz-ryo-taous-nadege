const APIKEY = "76d589c11f8de1e3e9b8dd346d698ce3";

//function c to f 
let isCelcius = true;
function celciusToFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}


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
  (isCelcius
    ? data.main.temp + " °C"
    : celciusToFarenheit(data.main.temp).toFixed(2) + " °F");


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
