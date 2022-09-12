let p2 = document.querySelector('p2');

let now =  new Date();

let minutes = now.getMinutes();
let hours = now.getHours();
let date = now.getDate();

let days  = ["Sunday", "Monday", "Tuesday", "Wed-day", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];


function time() {
  let minutes = now.getMinutes();
  let hours = now.getHours();
     if (minutes < 10 ) {
         p2.innerHTML = `${day} ${hours}:0${minutes}`;
         } else {
         p2.innerHTML = `${day} ${hours}:${minutes}`;

       if (minutes < 10) {
          p2.innerHTML = `${day} 0${hours}:${minutes}`;
       } else {
          p2.innerHTML = `${day} ${hours}:${minutes}`;
    }

};
}
time();



//function search(event) {
//  event.preventDefault();

//  let searchInput = document.querySelector(".form-control");
//  let city = document.querySelector(".city");

//  city.innerHTML = `Currently in <strong> ${searchInput.value}</strong>`;

//  getWeatherInTheCity(searchInput.value, showtemperature)
//}

//let form = document.querySelector("#city-name");
//form.addEventListener("click", search);

function stopClick(event) {
  event.preventDefault();
  let p11 = document.querySelector("p11");
  p11.innerHTML = 25;
}

//let p9 = document.querySelector("p9");
//p9.addEventListener("click", stopClick);

function stopClick1(event) {
  event.preventDefault();
  let p11 = document.querySelector("p11");
  let tempFar = 25 * 1.8 + 32;
  p11.innerHTML = tempFar;
}
//let p10 = document.querySelector("p10");
//p10.addEventListener("click", stopClick1);

p24 = document.querySelector("p24");
p25 = document.querySelector("p25");
p26 = document.querySelector("p26");
p27 = document.querySelector("p27");
p28 = document.querySelector("p28");
p29 = document.querySelector("p29");
p30 = document.querySelector("p30");

let day1 = days[now.getDay()+1];
let day2 = days[now.getDay()+2];
let day3 = days[now.getDay()+3];
let day4 = days[now.getDay()+4];
let day5 = days[now.getDay()+5];
let day6 = days[now.getDay()-1];

p24.innerHTML = `${day} ${date} ${month}`;
p25.innerHTML = `${day1} ${date+1} ${month}`;
p26.innerHTML = `${day2} ${date+2} ${month}`;
p27.innerHTML = `${day3} ${date+3} ${month}`;
p28.innerHTML = `${day4} ${date+4} ${month}`;
p29.innerHTML = `${day5} ${date+5} ${month}`;
p30.innerHTML = `${day6} ${date+6} ${month}`;






//function displayWeatherCondition(response) {
//  console.log(response.data.main.temp);
//  let temperatureElement = document.querySelector("p11");
//  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}`;
//}


//function getWeatherInTheCity()
//{
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=58be440968db92b348001fa4911e5ece&units=metric`;
  //axios.get(apiUrl).then(displayWeatherCondition);
//}

function displayWeatherCondition(response) {
  //console.log(response.data[0].name);

    celsiusTemperature = response.data.main.temp;

    document.querySelector(".city").innerHTML = response.data.name;
    document.querySelector("p11").innerHTML = Math.round(
    response.data.main.temp
  );

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
  );
    document.querySelector("#feels_like").innerHTML = Math.round(
       response.data.main.feels_like);
    document.querySelector("#pressure").innerHTML =
       response.data.main.pressure


  let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  //city.innerHTML = `Currently in <strong> ${response.data[0].name} </strong>`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${response.data[0].name}&appid=58be440968db92b348001fa4911e5ece&units=metric`;
  //axios.get(apiUrl).then(displayWeatherCondition);


};

function searchCity(city) {
  let apiKey = "58be440968db92b348001fa4911e5ece";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchLocation(position) {
  let apiKey = "58be440968db92b348001fa4911e5ece";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);


}
function getCurrentLocation(event) {
  event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation)
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".form-control").value;
  searchCity(city);
}

function displayFahrenheitT(event) {
  event.preventDefault();
  let farenheiTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("p11");
  temperatureElement.innerHTML = Math.round(farenheiTemp);
}

function displayCelsiusT(event) {
  event.preventDefault();
  let temperatureElement2 = document.querySelector("p11");
  temperatureElement2.innerHTML = Math.round(celsiusTemperature);
}


let celsiusTemperature = null;

let searchInputButton = document.querySelector("#button-addon2");
searchInputButton.addEventListener("click", handleSubmit);

let currentLocationButton = document.querySelector(".current");
currentLocationButton.addEventListener("click", getCurrentLocation);



let fahrenLink = document.querySelector("#fahren");
fahrenLink.addEventListener("click", displayFahrenheitT);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusT);

searchCity("London");
