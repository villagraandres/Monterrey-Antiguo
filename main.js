// Inicializa el mapa centrado en Monterrey
const map = L.map('map').setView([25.665306434652894, -100.3107755434175], 20);

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

const infoButton = L.control({ position: 'topleft' });

infoButton.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info-button');
    div.innerHTML = '<button id="infoButton">Info</button>';
    return div;
};

infoButton.addTo(map);



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
    genericB: L.icon({
        iconUrl: 'images/icons/camera.png',
        iconSize: [40, 40],
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
        coords: [25.664795997346236, -100.31165318508616],
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
        coords: [25.66820096427521, -100.31587602453637],
        id:'rf',
        title: "La Rueda de la Fortuna",
        description:"Una escena del 21 de marzo de 1906 en el centro de Monterrey ; se efectuaba el cambio de nomenclatura de la antigua calle del Roble por calle Benito Juárez.",
        icon:'genericS'
    },
    { 
        coords: [25.665391858382527, -100.31114516547818],
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

    { 
        coords: [25.672650920842667, -100.30882553424502],
        id:'pgobierno',
        title: "Palacio de Gobierno",
        description:"",
        icon:'generic'
    },

    { 
        coords: [25.685140263428753, -100.30971179021647],
        id:'ferro',
        title: "Estacion de ferrocarril unión ",
        description:"",
        icon:'generic'
    },

    { 
        coords: [25.685957643134085, -100.31711030529593],
        id:'hoteferro',
        title: "Zona hotelera Ferrocarril Unión",
        description:"",
        icon:'genericS'
    },

    { 
        coords: [25.667144844313135, -100.31195036923283],
        id:'morelos',
        title: "Calle Morelos ",
        description:"",
        icon:'genericB'
    },

    { 
        coords: [25.66582463256773, -100.3125876951903],
        id:'ancira',
        title: "Hotel Ancira ",
        description:"",
        icon:'genericS'
    },


    { 
        coords: [25.667876279071315, -100.30966145255536],
        id:'zuazua',
        title: "Calle Zuazua ",
        description:"En la imagen se puede ver el antiguo transporte con mulas. Igualmente la casa de la familia Maiz.",
        icon:'genericS'
    },

    { 
        coords: [25.667448874991983, -100.3095495509363],
        id:'fmaiz',
        title: "Casa de la familia Maiz.",
        description:"La casa, ubicada en la esquina de Zuazua y Padre Mier, se construyó en 1895 y albergó a la familia hasta que un incendio en 1919 la dejó en ruinas. Fue demolida en 1921. Los Maiz fueron dueños de negocios como la Empresa Metalúrgica de Minas de San Pedro y San Pablo, sombrererías y participaron en la fundación del Casino de Monterrey.",
        icon:'genericS'
    },

    { 
        coords: [25.666913684491004, -100.30998064591428],
        id:'paletos',
        title: "Sastreria A los cien mil paletos",
        description:"La sastrería A los cien mil paletos estaba ubicada en la esquina de Morelos y Juan Zuazua, como se aprecia en una fotografía de finales del siglo XIX.",
        icon:'genericS'
    },

    { 
        coords: [25.664437971229567, -100.31612129160538],
        id:'psan',
        title: "Puente San Luisito",
        description:"Este puente, ubicado sobre el río Santa Catarina, fue una importante estructura de conexión en Monterrey durante finales del siglo XIX y principios del XX. Construido con un diseño funcional y resistente, el Puente de San Luisito facilitaba el tránsito de personas y mercancías en una época de crecimiento para la ciudad. Aunque ya no existe, su imagen permanece como testimonio del desarrollo urbano e histórico de la región.",
        icon:'generic'
    },

    { 
        coords: [25.684072911734955, -100.31807534921813],
        id:'arco',
        title: "Arco de la Independencia",
        description:"Este puente, ubicado sobre el río Santa Catarina, fue una importante estructura de conexión en Monterrey durante finales del siglo XIX y principios del XX. Construido con un diseño funcional y resistente, el Puente de San Luisito facilitaba el tránsito de personas y mercancías en una época de crecimiento para la ciudad. Aunque ya no existe, su imagen permanece como testimonio del desarrollo urbano e histórico de la región.",
        icon:'generic'
    },

    { 
        coords: [25.668444055202407, -100.31377531978349],
        id:'galeana',
        title: "Constitucionalista en 1914",
        description:"En esta imagen se puede ver tropas Constitucionalista o Carrancistas despues de la batalla contra tropas federalistas.",
        icon:'genericB'
    },

    { 
        coords: [25.666015084068295, -100.31220527115029],
        id:'semaforo',
        title: "Semáforo en 1920",
        description:"Se puede ver como el cartel tiene la indicaciones Adeltante y Alto, este era controlado manualmente.",
        icon:'genericS'
    },

    { 
        coords: [25.67372195802588, -100.31467564888223],
        id:'croble',
        title: "Antigua calle del Roble",
        description:"Fotografia tomada en la antigua calle del Roble(hoy Benito Juárez), al fondo se puede ver el antiguo mercado Colón. Tambien los antiguos tramos del tranvia de mulitas.",
        icon:'genericS'
    },

    { 
        coords: [25.667414143701823, -100.312595303467],
        id:'reinera',
        title: "La Reinera",
        description:"Construido en 1899, este emblemático edificio de estilo neoclásico está revestido con cantera rosa traída de San Luis Potosí. Su diseño se atribuye al arquitecto británico Alfred Giles. En su segunda planta se ubicaba la residencia de su propietario, don Mariano Hernández, mientras que el primer nivel albergaba una tienda de telas y ropa.",
        icon:'genericS'
    },

    { 
        coords: [25.672171595958613, -100.3146967899208],
        id:'broble',
        title: "La Basílica Lateranense del Roble",
        description:"Construida en el siglo XIX, la antigua Basílica de Nuestra Señora del Roble es un símbolo religioso e histórico de Monterrey. Su arquitectura refleja un estilo neoclásico, con detalles que resaltan la devoción mariana de la región. Este templo fue erigido para albergar a la venerada imagen de la Virgen del Roble, encontrada milagrosamente en el tronco de un árbol en el siglo XVI. La basílica se convirtió en un centro de peregrinación y fe, consolidándose como uno de los lugares más importantes para la comunidad católica en el norte de México. Aunque ha sido renovada, su esencia histórica y espiritual perdura en el corazón de la ciudad.",
        icon:'church'
    },

    { 
        coords: [25.674305902449856, -100.31548538884569],
        id:'ccivil',
        title: "Colegio Civil",
        description:"Uno de los edificios más antiguos y emblemáticos del centro de Monterrey, el Colegio Civil, inició su construcción en 1794 bajo la dirección del arquitecto francés Jean Crouset. A finales de los años treinta del siglo XX, se modificó su frontispicio y se añadió un segundo nivel, completado en la década de los cuarenta. En los años sesenta, albergó a las Preparatorias 1 y 3 de la Universidad Autónoma de Nuevo León (UANL). Desde enero de 2007, funciona como el Centro Cultural Universitario, preservando su legado histórico y arquitectónico.Fuente: Cultura UANL",
        icon:'generic'
    },

    { 
        coords: [25.668645209402168, -100.31540350977515],
        id:'mieryroble',
        title: "Vendedores ambulantes",
        description:"",
        icon:'genericS'
    },

    { 
        coords: [25.667924254151117, -100.31067863065792],
        id:'zaramier',
        title: "Zaragoza 1880",
        description:"Monterrey, Nuevo Leon, México. La antigua calle del Ojo de Agua (hoy Zaragoza) en su cruce con Padre Mier, vista hacia el sur. Ca. 1880.",
        icon:'genericS',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.665118594278415, -100.30919278264723],
        id:'jardoncoss',
        title: "Cruce de la calle Dr. Coss Jardón 1900",
        description:"En la esquina derecha (donde dice La Paz y ahora está el Oxxo) estuvo la Capilla de Santa Rita, de la cual se dice la mamá de Agapito Treviño, doña Josefa González era la que cuidaba el lugar y que en varias ocasiones el famoso bandido se resguardó.",
        icon:'genericS',
        biblio:"Leonardo M. Hernández"
    },

    { 
        coords: [25.66852043483142, -100.3143732584116],
        id:'tarnava',
        title: "Edificio Tárnava",
        description:"En este extinto edificio se estableció la XEH, la primera estación de Radio de todo México, hoy en día existe un conocido negocio de telas.",
        icon:'genericS'
    },

    { 
        coords: [25.667677439512357, -100.31063215194294],
        id:'londres',
        title: "La ciudad de Londres",
        description:"En la esquina suroeste del cruce de las calles Zaragoza y Padre Mier existió la tienda de ropa La Ciudad de Londres,antes albergó al periódico The Monterrey News de 1892 a  1911, edificio construido a finales del siglo XIX.",
        icon:'genericS',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.66699382540714, -100.31082814465823],
        id:'moreloszaragoza',
        title: "Morelos y Zaragoza ",
        description:"",
        icon:'genericS',
        biblio:"Monterrey del Ayer"
    },

    


];

async function imageExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function getImages(id) {
    const images = [];
    let index = 1;
    while (true) {
        const path = `images/${id}/i${index}.jpg`;
        try {
            const exists = await imageExists(path);
            if (exists) {
                images.push(path);
                index++;
            } else {
                break; 
            }
        } catch (error) {
            console.error(`Error al verificar la imagen ${path}:`, error);
            break; 
        }
    }
    return images; 
}

// Function to open the modal
let currentIndex = 0;

async function openModal(title, description, id,biblio) {
    const images = await getImages(id); 
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    if(biblio!=0){
        document.getElementById('biblio').textContent = biblio;
    }

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
    
    const leafletMarker = L.marker(marker.coords, { icon: icons[marker.icon] }).addTo(map);
    leafletMarker.on('click', () => {
        if('biblio' in marker){
            openModal(marker.title, marker.description,marker.id,marker.biblio);
        }else{
            openModal(marker.title, marker.description,marker.id,0);
        }
        
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