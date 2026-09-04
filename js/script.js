/**
 * Função principal q obtém os dados do clima
 * @async
 * @function getWeather
 * @returns {void}
 */
async function getWeather() {
  // Configuração inicial
  const city = document.getElementById("city").value.trim(); // Obtém e limpa o valor do input
  
  // Validação de entrada
  if (!city) {
    showError("Digite o nome da cidade por favor");
    return;
  }

  // Construção da URL da API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
  try {
    // Mostrar estado de carregamento
    showLoading();
    
    // Requisição à API
    const response = await fetch(url);
    
    // Tratamento de erros HTTP
    if (!response.ok) {
      throw new Error(`Cidade não encontrada! (Status: ${response.status})`);
    }
    
    // Processamento dos dados
    const data = await response.json();
    displayWeather(data);
    
  } catch (error) {
    // Tratamento de erros
    showError(error.message);
  }
}
/**
 * Exibe as informações do clima na página
 * @function displayWeather
 * @param {Object} data - Dados meteorológicos da API
 */
function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  
  weatherInfo.innerHTML = `
    <div class="weather-card">
      <h2>${data.name}, ${data.sys.country}</h2>
      <div class="weather-main">
        <img src="${iconUrl}" alt="${data.weather[0].description}" class="weather-icon">
        <span class="temp">${Math.round(data.main.temp)}°C</span>
      </div>
      <p class="description">${capitalizeFirstLetter(data.weather[0].description)}</p>
      <div class="details">
        <p><i class="fas fa-temperature-low"></i> Sensação: ${Math.round(data.main.feels_like)}°C</p>
        <p><i class="fas fa-tint"></i> Umidade: ${data.main.humidity}%</p>
        <p><i class="fas fa-wind"></i> Vento: ${Math.round(data.wind.speed * 3.6)} km/h</p>
        <p><i class="fas fa-tachometer-alt"></i> Pressão: ${data.main.pressure} hPa</p>
      </div>
    </div>
  `;
}

/**
 * Capitaliza a primeira letra de uma string
 * @function capitalizeFirstLetter
 * @param {string} string - Texto a ser formatado
 * @returns {string} Texto capitalizado
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Exibe mensagem de erro
 * @function showError
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <div class="error">
      <i class="fas fa-exclamation-triangle"></i>
      ${message}
    </div>
  `;
}

/**
 * Exibe indicador de carregamento
 * @function showLoading
 */
function showLoading() {
  document.getElementById('weather-info').innerHTML = `
    <div class="loading">
      <i class="fas fa-spinner fa-spin"></i>
      Carregando dados meteorológicos...
    </div>
  `;
}
// Adiciona evento de tecla Enter no input
document.getElementById('city').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather();
  }
});

// Configura o botão de busca
document.querySelector('button').addEventListener('click', getWeather);