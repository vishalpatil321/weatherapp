// Api Link : https://api.openweathermap.org/data/2.5/weather?q=New%20york&appid=4a19cc148ab74847efabdf1687953e63 //

let getInputbox = document.querySelector('.search-box');
let getButton = document.querySelector('button'); 
let getImg = document.querySelector('img');
let getTemp = document.querySelector('.temp');
let getCity = document.querySelector('.city');
let getHum = document.querySelector('.hum');
let getspe = document.querySelector('.spe');
let getError = document.querySelector('.error');

async function checkWeather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a19cc148ab74847efabdf1687953e63`);
    let data = await response.json();
    console.log(data.weather[0].main);
    getTemp.innerText = data.main.temp + '°C';
    getCity.innerText = data.name;
    getHum.innerText = data.main.humidity;
    getspe.innerText = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        getImg.src = 'weather-Images/cloud.png';
    }
    else if(data.weather[0].main == 'Clear'){
        getImg.src = 'weather-Images/sunny.webp';
    }
    else if(data.weather[0].main == 'Rain'){
        getImg.src = 'weather-Images/rainy.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        getImg.src = 'weather-Images/stormy.png';
    }
    else if(data.weather[0].main == 'Mist'){
        getImg.src = 'weather-Images/windy.webp';
    }
  }

  getButton.addEventListener('click' , () => {
   
   
    checkWeather(getInputbox.value);
    getInputbox.value = ' ';
    
  })
   
