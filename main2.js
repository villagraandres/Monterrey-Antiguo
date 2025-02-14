// Inicializa el mapa centrado en Monterrey
const map = L.map('map').setView([25.665306434652894, -100.3107755434175], 20);

// Capa base: Mapa estándar
const mapaBase = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Agrega la capa base al mapa
mapaBase.addTo(map);