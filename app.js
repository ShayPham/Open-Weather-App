/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate() + '.'+ d.getFullYear();

document.addEventListener('DOMContentLoaded', function() {
  var generateButton = document.getElementById('generate');
  generateButton.addEventListener('click', handleClick);
});

function handleClick() {
  var zipCode = document.getElementById('zip').value;
  var feelings = document.getElementById('feelings').value;
  fetchWeather(zipCode, feelings, newDate);
}

function fetchWeather(zip, feelings, date) {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const zipCode = zip;
  const apiKey = 'b0df923fe22b20b64ac181d4eb968f81'; 

  fetch(`${apiUrl}?zip=${zipCode}&appid=${apiKey}&units=imperial`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          var temp = data.main.temp;
          insertEntry(feelings, temp, date);
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
}

function insertEntry(feeling, temp, date) {
  var dateElement = document.getElementById('date');
  var tempElement = document.getElementById('temp');
  var contentElement = document.getElementById('content');

  if(dateElement.innerHTML == '') {
      dateElement.innerHTML = date;
      tempElement.innerHTML = temp;
      contentElement.innerHTML = feeling;
  } else {
      dateElement.innerHTML += `, ${date}`;
      tempElement.innerHTML += `, ${temp}`;
      contentElement.innerHTML += `, ${feeling}`;
  }
}
  
  