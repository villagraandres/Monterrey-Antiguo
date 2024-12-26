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
        description: "El Círculo Mercantil Mutualista de Monterrey fue constituido en 1901 y contaba con 38 socios. El edificio actual fue diseñado por FIUSA y su construcción dirigida por Juan Garza Lafón, inaugurándose en septiembre de 1933. Ocupa parte del terreno de la antigua iglesia y convento de San Francisco que cerraban la calle de Zaragoza al sur y que fueron destruidos en 1914"
           
    },


    { 
        coords: [25.668122, -100.310596],
        id:'cine-elizondo',
        title: "Cine Elizondo",
        description: "El imponente y legendario Gran Cinema ELIZONDO, es sin duda uno de los íconos más representativos de Monterrey y que se ubicaba en la acera Oriente en el 833 Sur de la avenida Zaragoza entre las calles de Padre Mier y Mariano Matamoros, dónde hoy se encuentra la Fuente de Neptuno de la Macro Plaza, en el centro de la ciudad de Monterrey, NL, México.." 
    }

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
markers.map(marker=>{
    marker.images=getImages(marker.id)
});
markers.forEach(marker => {
    L.marker(marker.coords)
        .addTo(map)
        .on('click', () => {
            sidebar.open('info');
            document.getElementById('marker-info').innerHTML = `
            <h3>${marker.title}</h3>
            <p>${marker.description}</p>
            ${marker.images.map(img => `<img src="${img}" alt="${marker.title}" style="width:100%;margin-top:10px;">`).join('')}`;
        });
});