// Inicializa el mapa centrado en Monterrey
const map = L.map('map').setView([25.667681, -100.310019], 20);

// Capa base 1: Mapa estándar
const mapaBase = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
});

// Capa base 2: Vista satelital
const satelital = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri, Maxar, Earthstar Geographics',
});

// Agrega la capa satelital como predeterminada
satelital.addTo(map);

// Control de capas para alternar entre mapa y satélite
const capasBase = {
    "Mapa": mapaBase,
    "Satelital": satelital
};
L.control.layers(capasBase).addTo(map);

// Agrega una barra lateral
const sidebar = L.control.sidebar({
    autopan: true,
    closeButton: true,
    container: 'sidebar'
}).addTo(map);

// Lista de marcadores
const markers = [
    
    { 
        coords: [25.66521791707737, -100.31154415570292],
        id:'circulo-mercantil',
        title: "Circulo Mercantil",
        description: "El Círculo Mercantil Mutualista de Monterrey fue constituido en 1901 y contaba con 38 socios. El edificio actual fue diseñado por FIUSA y su construcción dirigida por Juan Garza Lafón, inaugurándose en septiembre de 1933. Ocupa parte del terreno de la antigua iglesia y convento de San Francisco que cerraban la calle de Zaragoza al sur y que fueron destruidos en 1914",
        icon:'generic'   
    },


    { 
        coords: [25.668122, -100.310596],
        id:'cine-elizondo',
        title: "Cine Elizondo",
        description: "El imponente y legendario Gran Cinema ELIZONDO, es sin duda uno de los íconos más representativos de Monterrey y que se ubicaba en la acera Oriente en el 833 Sur de la avenida Zaragoza entre las calles de Padre Mier y Mariano Matamoros, dónde hoy se encuentra la Fuente de Neptuno de la Macro Plaza, en el centro de la ciudad de Monterrey, NL, México..",
        icon:'cinema' 
    },

    { 
        coords: [25.66527821130441, -100.30966899686675],
        id:'catedral-mty',
        title: "Catedral de Monterrey",
        description: "El imponente y legendario Gran Cinema ELIZONDO, es sin duda uno de los íconos más representativos de Monterrey y que se ubicaba en la acera Oriente en el 833 Sur de la avenida Zaragoza entre las calles de Padre Mier y Mariano Matamoros, dónde hoy se encuentra la Fuente de Neptuno de la Macro Plaza, en el centro de la ciudad de Monterrey, NL, México.." ,
        icon:'church'
    },
    { 
        coords: [25.670974, -100.310079],
        id:'puente-juarez',
        title: "Antiguo Puente Juarez",
        description:"Ya no existe ",
        icon:'generic'
    },

    { 
        coords: [25.68252068033367, -100.29634258027747],
        id:'prepa-3',
        title: "Preparatoria 3",
        description:"ahi esta ",
        icon:'generic'
    },



];

function imageExists(p){
    const http = new XMLHttpRequest();
    http.open('HEAD',p , false);
    http.send();
    return http.status !== 404;
}
function getImages(id){
    const images=[];
    let index=1;
    while(true){
        const path=`images/${id}/i${index}.jpg`;
        if(imageExists(path)){
            images.push(path);
            index++;
        }else{
            break;
        }
    }
    return images;

}
//polyline


var latlngs = [
    [25.6710283319292, -100.31010035916235],
    [25.6708040921522, -100.30904137808261],
    [25.670447607535806, -100.30650237525288]
];




//icons

const icons = {
    generic: L.icon({
        iconUrl: 'images/icons/generic.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    }),
    cinema: L.icon({
        iconUrl: 'images/icons/cinema.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    }),
    church: L.icon({
        iconUrl: 'images/icons/church.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    })
};



//river

var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map).on('click',()=>{
    alert("sa");
});
map.fitBounds(polyline.getBounds());


// Función para abrir la modal
let currentIndex = 0;

function openModal(title, description, images) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;

  const carousel = document.querySelector('.image-carousel');
  carousel.innerHTML = images
    .map((img, index) => `<img src="${img}" class="carousel-image ${index === 0 ? 'active' : ''}" alt="Imagen" onclick="zoomImage(${index})">`)
    .join('');

  const zoomedImageContainer = document.getElementById('zoomedImageContainer');
  zoomedImageContainer.innerHTML = images
    .map((img, index) => `<img src="${img}" class="zoomed-image ${index === 0 ? 'active' : ''}" alt="Imagen ampliada">`)
    .join('');

  currentIndex = 0;
  document.querySelector('.modal-overlay').classList.add('active');
  updateCarouselButtons();
}
function closeModal() {
  document.querySelector('.modal-overlay').classList.remove('active');
}

// Close modal when clicking outside of it
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal-overlay')) {
    closeModal();
  }
});

// Funciones para navegar el carrusel
function prevImage() {
  const images = document.querySelectorAll('.carousel-image');
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add('active');
  updateCarouselButtons();
  zoomImage(currentIndex);
}

function nextImage() {
  const images = document.querySelectorAll('.carousel-image');
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
  updateCarouselButtons();
  zoomImage(currentIndex);
}

// Función para actualizar el estado de los botones del carrusel
function updateCarouselButtons() {
  const images = document.querySelectorAll('.carousel-image');
  document.getElementById('prevButton').disabled = currentIndex === 0;
  document.getElementById('nextButton').disabled = currentIndex === images.length - 1;
}

// Función para hacer zoom en la imagen seleccionada
function zoomImage(index) {
  const zoomedImages = document.querySelectorAll('.zoomed-image');
  const carouselImages = document.querySelectorAll('.carousel-image');
  zoomedImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  currentIndex = index;
  updateCarouselButtons();
}

// Agrega los marcadores al mapa
markers.forEach((marker) => {
    // Obtén las imágenes del marcador
    const images = getImages(marker.id);

    // Crea el marcador con el ícono correspondiente
    const leafletMarker = L.marker(marker.coords, { icon: icons[marker.icon] }).addTo(map);

    // Asigna el evento 'click' al marcador para abrir el modal
    leafletMarker.on('click', () => {
        openModal(marker.title, marker.description, images);
    });
});

// Event listeners for modal navigation buttons
document.getElementById('prevButton').addEventListener('click', prevImage);
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('closeButton').addEventListener('click', closeModal);