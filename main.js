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

// Icons
const icons = {
    generic: L.icon({
        iconUrl: 'images/icons/generic.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    }),
    genericS: L.icon({
        iconUrl: 'images/icons/camera.png',
        iconSize: [30, 30],
        iconAnchor: [20, 20],
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

// Lista de marcadores
const markers = [
    { 
        coords: [25.66521791707737, -100.31154415570292],
        id:'circulo-mercantil',
        title: "Circulo Mercantil",
        description: "El Círculo Mercantil Mutualista de Monterrey fue constituido en 1901 y contaba con 38 socios. El edificio actual fue diseñado por FIUSA y su construcción dirigida por Juan Garza Lafón, inaugurándose en septiembre de 1933. Ocupa parte del terreno de la antigua iglesia y convento de San Francisco que cerraban la calle de Zaragoza al sur y que fueron destruidos en 1914",
        icon:'genericS'   
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
        id:'prepa3',
        title: "Preparatoria 3",
        description:"ahi esta ",
        icon:'generic'
    },
    { 
        coords: [25.66565418852964, -100.31059007045887],
        id:'pzaragoza',
        title: "Plaza Zaragoza",
        description:"",
        icon:'generic'
    },
    { 
        coords: [25.667978736383702, -100.31148212647439],
        id:'vidaurri',
        title: "Antigua casa de Vidaurri",
        description:"",
        icon:'genericS'
    },
    { 
        coords: [25.667830043024228, -100.31736147495705],
        id:'vr',
        title: "Residencia del empresario español Valentin Rivero",
        description:"",
        icon:'genericS'
    },
    { 
        coords: [25.668650228961805, -100.3155597237249],
        id:'rf',
        title: "La Rueda de la Fortuna",
        description:"Una escena del 21 de marzo de 1906 en el centro de Monterrey ; se efectuaba el cambio de nomenclatura de la antigua calle del Roble por calle Benito Juárez.",
        icon:'genericS'
    },
    { 
        coords: [25.665622, -100.312317],
        id:'cSA',
        title: "Convento de San Andres",
        description:"Fue una de las primeras construcciones en Monterrey, iniciando su obra en 161 En su solar tenía caballerizas y un cementerio, donde fueron sepultados los fundadores de la Ciudad Metropolitana de Nuestra Señora de Monterrey.Fue demolido en 1914 tras los eventos revolucionarios suscitados en Monterrey. Se puede ver aun en el escudo de del estado",
        icon:'church'
    },
    { 
        coords: [25.666254389817944, -100.31108824969155],
        id:'palMun',
        title: "Antiguo Palacio Municipal de Monterrey",
        description:"",
        icon:'generic'
    },
    { 
        coords: [25.667428497638404, -100.31309384966153],
        id:'hotelMex',
        title: "Hotel Mexico",
        description:"En la planta alta albergaba al hotel y su planta baja era ocupada por varios negocios ; actualmente ahí se ubica Plaza México en las dos plantas.",
        icon:'genericS'
    },
    { 
        coords: [25.66881261327536, -100.31168057706472],
        id:'teatroProg',
        title: "Teatro Progreso",
        description:"",
        icon:'cinema'
    },
    { 
        coords: [25.668166404506614, -100.31516883925643],
        id:'mercadoColon',
        title: "Antiguo Mercado Colon",
        description:"Esta alberca llegó a ser justamente famosa y tuvo servicios de baños de todos tipos, como rusos, turcos, de regadera tibia y fría, de tina y de estanque; así como departamentos para masajes. La prensa local publicaba casi diariamente anuncios de la Compañía de Baños o La Alberca, El pueblo de Monterrey tuvo siempre gran cariño por esta instalación cuyas aguas de manantial nacido allí, fueron tradicionales, por pertenecer a lo que se llamó Río de Santa Lucía y más tarde el “Canalón”.",
        icon:'genericS'
    },
    { 
        coords: [25.6697578116123, -100.3108505118439],
        id:'casabanos',
        title: "La casa de Baños",
        description:"Esta alberca llegó a ser justamente famosa y tuvo servicios de baños de todos tipos, como rusos, turcos, de regadera tibia y fría, de tina y de estanque; así como departamentos para masajes. La prensa local publicaba casi diariamente anuncios de la Compañía de Baños o La Alberca, El pueblo de Monterrey tuvo siempre gran cariño por esta instalación cuyas aguas de manantial nacido allí, fueron tradicionales, por pertenecer a lo que se llamó Río de Santa Lucía y más tarde el “Canalón”.",
        icon:'genericS'
    },
    { 
        coords: [25.66732735941087, -100.31153135956201],
        id:'tSorpresa',
        title: "Sorpresa y Primavera",
        description:"La tienda Sorpresa y Primavera fue fundada el 1 de marzo de 1891 por los hermanos Manuel, José y Rufino Cantú Treviño en la calle del Comercio (hoy Morelos) en Monterrey. Tras su éxito, adquirieron la propiedad y en 1900 contrataron al arquitecto Alfred Giles para construir un nuevo edificio. Inaugurado en 1901, este edificio de tres pisos albergaba oficinas, una tienda de artículos importados y telas locales, y contaba con el primer elevador en Monterrey, aunque era poco usado por la clientela de la época. En mayo de 1926, un incendio destruyó esta joya arquitectónica, que permanece en el recuerdo de la ciudad.",
        icon:'genericS'
    },
];

// Function to check if an image exists
function imageExists(p) {
    const http = new XMLHttpRequest();
    http.open('HEAD', p, false);
    http.send();
    return http.status !== 404;
}

// Function to get images for a marker
function getImages(id) {
    const images = [];
    let index = 1;
    while (true) {
        const path = `images/${id}/i${index}.jpg`;
        if (imageExists(path)) {
            images.push(path);
            index++;
        } else {
            break;
        }
    }
    return images;
}

// Function to open the modal
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

// Function to close the modal
function closeModal() {
    document.querySelector('.modal-overlay').classList.remove('active');
}

// Close modal when clicking outside of it
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal-overlay')) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
       
    }
});


// Functions to navigate the carousel
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

// Function to update the state of the carousel buttons
function updateCarouselButtons() {
    const images = document.querySelectorAll('.carousel-image');
    document.getElementById('prevButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === images.length - 1;
}

// Function to zoom in on the selected image
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

// Add markers to the map
markers.forEach((marker) => {
    const images = getImages(marker.id);
    const leafletMarker = L.marker(marker.coords, { icon: icons[marker.icon] }).addTo(map);
    leafletMarker.on('click', () => {
        openModal(marker.title, marker.description, images);
    });
});

// Event listeners for modal navigation buttons
document.getElementById('prevButton').addEventListener('click', prevImage);
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('closeButton').addEventListener('click', closeModal);

//polyline
var latlngs = [
    [25.6710283319292, -100.31010035916235],
    [25.6708040921522, -100.30904137808261],
    [25.670447607535806, -100.30650237525288]
];

//river
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map).on('click',()=>{
    alert("sa");
});
map.fitBounds(polyline.getBounds());