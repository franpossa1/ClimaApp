let ClimaAPI = {
  
    apiKey: "d88a3271bc7a85c4292f767e82a45dc7",
  fetchWeather: function (ciudad) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&appid=" +this.apiKey,
    ).then((respuesta)=>respuesta.json())
    .then((data)=>console.log(data));
  },
  mostrarClima : function (data){
      const {name} = data;
      const {icon,description} = data.weather[0];
      const {temp, humidity}= data.temp;
      const {speed} =data.wind; 
      console.log(name);
    document.querySelector(".clima").innerText = "Clima en " + name; 
    
    
    
    }

  }


