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
  if (minutes > 10) {
    p2.innerHTML = `${day} ${hours}:${minutes}`;
  } else {
    p2.innerHTML = `${day} ${hours}:0${minutes}`;
  }
}
time();



function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector(".form-control");
  let city = document.querySelector(".city");

  city.innerHTML = `Currently in <strong> ${searchInput.value}</strong>`;

  getWeatherInTheCity(searchInput.value, showtemperature)
}

let form = document.querySelector("#city-name");
form.addEventListener("click", search);

function stopClick(event) {
  event.preventDefault();
  let p11 = document.querySelector("p11");
  p11.innerHTML = 25;
}

let p9 = document.querySelector("p9");
p9.addEventListener("click", stopClick);

function stopClick1(event) {
  event.preventDefault();
  let p11 = document.querySelector("p11");
  let tempFar = 25 * 1.8 + 32;
  p11.innerHTML = tempFar;
}
let p10 = document.querySelector("p10");
p10.addEventListener("click", stopClick1);

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


let searchInput = document.querySelector(".form-control");

function showtemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("p11");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}`;
}


function getWeatherInTheCity()
{
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=58be440968db92b348001fa4911e5ece&units=metric`;
  axios.get(apiUrl).then(showtemperature);
}

function showname(response) {
  console.log(response.data[0].name);
  let city = document.querySelector(".city");
  city.innerHTML = `Currently in <strong> ${response.data[0].name} </strong>`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${response.data[0].name}&appid=58be440968db92b348001fa4911e5ece&units=metric`;
  axios.get(apiUrl).then(showtemperature);
};

function showPosition(position) {
  //let searchInput = document.querySelector(".form-control");
  //let city = document.querySelector(".city");
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
 let apiUrl1 = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=58be440968db92b348001fa4911e5ece`;
 axios.get(apiUrl1).then(showname);


}
function getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(showPosition)
}

let buttonCurrent = document.querySelector(".current");
buttonCurrent.addEventListener("click", getCurrentPosition)
