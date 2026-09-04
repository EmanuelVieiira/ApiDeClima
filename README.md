# ☀️ Consulta de Clima

> App de previsão do tempo por cidade, consumindo a API OpenWeatherMap para exibir temperatura, sensação térmica, umidade, vento e pressão em tempo real.

## 🖼️ Prévia
<img width="1223" height="695" alt="image" src="https://github.com/user-attachments/assets/9cbc06a8-6e64-4112-af51-3584f366492d" />

## 🚀 Funcionalidades

- 🔎 Busca por cidade (com suporte a tecla Enter)
- 🌡️ Temperatura atual e sensação térmica
- 💧 Umidade, vento e pressão atmosférica
- 🖼️ Ícone dinâmico representando a condição do clima
- ⚠️ Mensagens de erro amigáveis (cidade não encontrada, campo vazio)
- 📍 Interface limpa e responsiva

## 🛠️ Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **HTML5** — estrutura da página
- **CSS3** — estilização
- **JavaScript** — requisições assíncronas (fetch/async-await) e manipulação do DOM
- **API OpenWeatherMap** — fonte dos dados meteorológicos

## ▶️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/EmanuelVieiira/ApiDeClima.git
   cd ApiDeClima
   ```
2. Crie sua própria chave de API gratuita em [openweathermap.org/api](https://openweathermap.org/api).
3. Copie `js/config.example.js` para um novo arquivo `js/config.js` e cole sua chave:
   ```js
   const apiKey = "SUA_CHAVE_AQUI";
   ```
4. Abra o `index.html` no navegador (ou use a extensão "Live Server" do VS Code).

> ⚠️ O arquivo `js/config.js` é ignorado pelo Git (está no `.gitignore`) porque contém sua chave pessoal — nunca suba esse arquivo com uma chave real para o repositório.

## 🎯 Objetivo

Projeto desenvolvido para praticar consumo de API externa, tratamento de dados em JSON, requisições HTTP assíncronas e manipulação do DOM para exibir dados em tempo real.
