let buscadorDeTexto = document.querySelector(".buscatex");

let ClimaAPI = {
  apiKey: "d88a3271bc7a85c4292f767e82a45dc7",
  fetchWeather: function (ciudad) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        ciudad +
        "&appid=" +
        this.apiKey +
        "&lang=sp"
    )
      .then((respuesta) => respuesta.json())
      .then((data) => this.mostrarClima(data));
  },
  mostrarClima: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(data);
    console.log(`ARROJANDO RESULTADOS :  ${name}`);
    document.querySelector(".clima").innerText = `Clima en ${name}`;
    document.querySelector(".temperatura-clima").innerText = ` ${Math.round(
      temp - 273
    )} °C`;
    document.querySelector(".descripcion").innerText = `${description}`;
    document.querySelector(".humedad").innerText = `Humedad: ${humidity} %`;
    document.querySelector(".viento").innerText = `Viento: ${speed} Km/h`;
    document.querySelector(
      ".icono-clima"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    buscadorDeTexto.value = "";
  },
  buscar: function () {
    this.fetchWeather(buscadorDeTexto.value);
  },
};
document
  .querySelector(".accion-buscar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    ClimaAPI.buscar();
  });
