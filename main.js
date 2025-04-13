
// Inicializa el mapa centrado en Monterrey
const map = L.map('map').setView([25.668247589057682, -100.31027985729408], 16);

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

// Icons
const icons = {
    generic: L.icon({
        iconUrl: 'images/icons/generic.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    }),
    park: L.icon({
        iconUrl: 'images/icons/park.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    }),

    store: L.icon({
        iconUrl: 'images/icons/store.png',
        iconSize: [35, 35],
        iconAnchor: [20, 20],
        popupAnchor: [0, -40]
    }),
    hotel: L.icon({
        iconUrl: 'images/icons/hotel.png',
        iconSize: [35, 35],
        iconAnchor: [20, 20],
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
        iconSize: [35, 35],
        iconAnchor: [20, 30],
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
        title: "Circulo Mercantil222",
        description: "El Círculo Mercantil Mutualista de Monterrey fue constituido en 1901 y contaba con 38 socios.\nEl edificio actual fue diseñado por FIUSA y su construcción dirigida por Juan Garza Lafón, inaugurándose en septiembre de 1933. Ocupa parte del terreno de la antigua iglesia y convento de San Francisco que cerraban la calle de Zaragoza al sur y que fueron destruidos en 1914",
        icon:'genericS'   
    },
    { 
        coords: [25.668459242691252, -100.31006796984998],
        id:'cine-elizondo',
        title: "Cine Elizondo",
        description: "El Cine Elizondo, inaugurado el 10 de septiembre de 1943 en el centro de Monterrey, fue uno de los recintos cinematográficos más majestuosos de la ciudad antes de la llegada de las grandes cadenas. Construido sobre el antiguo Teatro Progreso y diseñado por el arquitecto Arturo Olivero Cedeño, contaba con una capacidad para mil 700 personas y una ornamentación única de estilo asiático, con figuras como un buda y un dragón. Su primera función proyectó China Sky y contó con la presencia de María Félix y Cantinflas. Pese a su valor arquitectónico y cultural, fue demolido el 2 de noviembre de 1981 para dar paso a la Macroplaza.",
        icon:'cinema' 
    },
    { 
        coords: [25.66527821130441, -100.30966899686675],
        id:'catedral-mty',
        title: "Catedral de Monterrey",
        description: "Lucía, debido a la inundación de la Ciudad de Monterrey en 1611, se destina una nueva ubicación siendo la que conocemos actualmente, sin embargo, fue hasta 1663 que se inicia su construcción con los esfuerzos del obispo de Guadalajara, Cervantes y Carvajal. Y no fue sino hasta el año 1800 que se concluye la portada de la primera nave de la catedral. <br><br>El 03 de junio de 1833 es consagrada como la Catedral de Monterrey por el sexto obispo de Linares-Monterrey, fray José María de Jesús Belaunzarán y Ureña.La Arquidiócesis recibió el título de Arquidiócesis Metropolitana el 23 de Junio de 1891, por la Bula “Ilud in Primis” de Su Santidad León XIII." ,
        icon:'church',
        biblio:"Catedral Metropolitana de Monterrey"
    },
    { 
        coords: [25.670974, -100.310079],
        id:'puente-juarez',
        title: "Antiguo Puente Juarez",
        description:"El Puente Juárez, construido en 1886 durante la administración del general Bernardo Reyes, fue una obra clave para Monterrey. Diseñado por el ingeniero Miguel Mayora, su resistencia inicial fue cuestionada por los ciudadanos. Para demostrar su solidez, Mayora se situó bajo los arcos mientras pasaban pesadas carretas cargadas de leña, piedra y caña, disipando así las dudas. Este puente, promovido por la Junta de Mejoras Materiales (presidida por el doctor González), formó parte de los esfuerzos por modernizar la ciudad y controlar las aguas del antiguo Ojo de Agua de Santa Lucía, cuyo estancamiento causaba enfermedades. El Puente Juárez simbolizó avance técnico y confianza en la ingeniería de la época.",
        icon:'generic',
        biblio:"Crónicas y Sucedidos del Monterrey de los siglos XIX y XX"
    },
    { 
        coords: [25.68252068033367, -100.29634258027747],
        id:'prepa3',
        title: "Preparatoria 3",
        description:"Fundada en 1933, su sede histórica en Monterrey destaca por su arquitectura neoclásica de principios del siglo XX. Con columnas, arcos y detalles clásicos, el edificio combina tradición y educación. Aunque hoy tiene instalaciones modernas, su estructura antigua sigue siendo un símbolo de identidad para generaciones de estudiantes.",
        icon:'generic'
    },
    { 
        coords: [25.66565418852964, -100.31059007045887],
        id:'pzaragoza',
        title: "Plaza Zaragoza",
        description:"",
        icon:'park'
    },
    { 
        coords: [25.667978736383702, -100.31148212647439],
        id:'vidaurri',
        title: "Antigua casa de Vidaurri",
        description:"",
        icon:'genericS'
    },
    { 
        coords: [25.66776179989249, -100.31643992629432],
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
        coords: [25.666102756126584, -100.31124099632491],
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
        description:"Teatro del Progreso, primer teatro de Monterrey después del incendio que lo destruyó el 8 de septiembre de 1896. Este teatro estuvo en la acera oriente de la calle de Escobedo, entre Padre Mier y la calle de Matamoros.",
        icon:'cinema',
        biblio:"Tec de Monterrey"
    },
    { 
        coords: [25.668166404506614, -100.31516883925643],
        id:'mercadoColon',
        title: "Antiguo Mercado Colon",
        description:"El Mercado Colón fue inaugurado en 1875 en Monterrey, reemplazando a los antiguos puestos improvisados que desde 1853 ocupaban la plaza de la Carne. Este nuevo mercado, construido con una esbelta arquería y una torre con reloj, representó un avance significativo en la organización comercial de la ciudad. Surgió como respuesta a la necesidad de un espacio más ordenado y atractivo para el comercio, alejándose del bullicio y desorden de los mercados anteriores. Su nombre honra al explorador Cristóbal Colón, y durante décadas fue un centro importante de abasto y vida social en la ciudad. El Mercado Colón marcó una etapa clave en la evolución de los espacios comerciales en Monterrey durante el siglo XIX.",
        icon:'store',
        biblio:"Crónicas y Sucedidos del Monterrey de los siglos XIX y XX"
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
        icon:'store'
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
        title: "Estacion de ferrocarril del Golfo ",
        description:"La Estación del Golfo en Monterrey fue clave en la comunicación y transporte de la ciudad. Inicialmente, el traslado dependía de mulas, carretas y diligencias, con rutas peligrosas debido a asaltos y obstáculos naturales. La situación mejoró con la llegada del ferrocarril en 1882, conectando Monterrey con Nuevo Laredo y, posteriormente, con Tampico y San Luis Potosí. Inaugurada en 1891, la estación fue un edificio emblemático diseñado por Isaac D. Taylor. Durante la Revolución, jugó un papel estratégico en los ataques a Monterrey. En 1971, las vías fueron removidas y la estación restaurada como sede de la Casa de la Cultura de Nuevo León.",
        icon:'generic',
        biblio:'Tec de Monterrey'
    },

    { 
        coords: [25.685957643134085, -100.31711030529593],
        id:'hoteferro',
        title: "Zona hotelera Ferrocarril Unión",
        description:"",
        icon:'genericS'
    },

    { 
        coords: [25.666917603211434, -100.31181019292393],
        id:'morelos',
        title: "Calle Morelos ",
        description:"",
        icon:'genericS'
    },

    { 
        coords: [25.66582463256773, -100.3125876951903],
        id:'ancira',
        title: "Hotel Ancira ",
        description:" Su construcción se inició en 1909 y se inauguró el 26 de julio de 1912 con el nombre de Gran Hotel Monterrey. A raíz de la muerte del promotor del proyecto, Fernando Ancira Sánchez, en 1921 la familia cambió el nombre original por el de Gran Hotel Ancira.[1]​ En este hotel, se hospedaron figuras como María Félix, Agustín Lara, Rufino Tamayo, Leonora Carrington, Luciano Pavarotti y Gabriel García Márquez.",
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
        icon:'store'
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
        description:"El Arco de la Independencia, ubicado en el cruce de las avenidas Unión (Calzada Madero) y Progreso (Avenida Pino Suárez), fue el resultado de un concurso público para crear un monumento conmemorativo del primer centenario de la Independencia nacional. El proyecto, seleccionado por la Junta de Mejoras Materiales, fue realizado en el despacho del arquitecto Alfred Giles, en Monterrey, y construido con cantera rosa de San Luis Potosí, bajo la responsabilidad del maestro de obras Pedro Cabral. Su inauguración se llevó a cabo puntualmente el 16 de septiembre de 1910.",
        icon:'generic',
        biblio:"Flores Salazar, Armando V. Legado arquitectónico del gobierno de Bernardo Reyes. Ciencia UANL"
    },

    { 
        coords: [25.668444055202407, -100.31377531978349],
        id:'galeana',
        title: "Constitucionalista en 1914",
        description:"En esta imagen se puede ver tropas Constitucionalista o Carrancistas despues de la batalla contra tropas federalistas.",
        icon:'genericS'
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
        title: "La Reynera",
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
        coords: [25.67403027971204, -100.31518974419711],
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
        coords: [25.66830989956899, -100.31060737587246],
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
        coords: [25.66751332405109, -100.31051096070406],
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

    },

    { 
        coords: [25.66775948547404, -100.31088648912464],
        id:'hiturbide',
        title: "Hotel Iturbide",
        description:"",
        icon:'genericS',
    },
    { 
        coords: [25.664345617918585, -100.30582851623512],
        id:'puenteJ',
        title: "Puente de madera",
        description:"Puente de madera instalado en el año de 1934 sobre el río Santa Catarina para unir la calle Pedro Martínez con la calle Raymundo Jardón del barrio antiguo de Monterrey.Ca. 1935 La estructura se mantuvo por cuatro años, ya que en 1938 se presentó una fuerte inundación que destruyó tal puente.",
        icon:'genericB',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.670169030635165, -100.3315714709277],
        id:'calleReal',
        title: "Escena vespertina sobre la Calle Real",
        description:"Escena vespertina sobre la Calle Real (hoy Hidalgo ) alrededor del año 1900 ; frente a la acera sur se observa el tendido de rieles para el paso de los tranvías de mulitas. La casona del lado derecho de la imágen era llamada la Casa del Mirador , construída a mediados del siglo XIX , en la que en febrero de 1864 recibió la visita del presidente Juárez .",
        icon:'genericB',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.670349017505607, -100.31077618826608],
        id:'teatroJuarez',
        title: "Teatro Juarez",
        description:"El Teatro Juárez se ubicaba en la calle Zaragoza, en su intersección con Terán (hoy Juan Ignacio Ramón) inaugurado un 15 de septiembre de 1898, en 1909 fué victima de un voraz incendio, fué reabilitado en el año de 1910 llevando el nombre de Teatro Independencia. Hacia 1937 fué remodelado como Teatro y cinema Rex; en la década de los 70's albergó al cine Olimpia , dejando de ser teatro. Finalmente en el año de 1982, el histórico recinto fué demolido para dar paso a los trabajos de la Macroplaza.",
        icon:'cinema',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.67469780528734, -100.31650634455947],
        id:'cwash',
        title: "Manifestación popular de la Gran Convención Electoral",
        description:"",
        icon:'genericS'
    
    },

    { 
        coords: [25.667393183388317, -100.31610226400613],
        id:'pdegollado',
        title: "Plaza Degollado",
        description:"La Constancia era la fábrica azucarera, propiedad de don Pedro P.Quintanilla, en una fotografía de la última década del siglo XIX, de las primeras construcciones de tres niveles en el centro de la ciudad, dicho predio se ubicaba en la acera sur de la calle Hidalgo, entre Garibaldi y Juárez, a escasos metros tenía como vecinos, al oriente el palacete de don Valentín Rivero y al poniente la casona del gobernador de Nuevo León, el Gral. Bernardo Reyes. Al frente se situaba la Plaza Degollado, engalanada por la fuente de Mercurio, justo donde se unen las calles de Hidalgo y Morelos.",
        icon:'park',
        biblio:"Monterrey del Ayer"
    
    },

    { 
        coords: [25.676202076101664, -100.32009540577526],
        id:'alameda',
        title: "Alameda",
        description:"",
        icon:'park',
        
    
    },

    { 
        coords: [25.669772615705636, -100.32654895661446],
        id:'purisima',
        title: "La Purisima",
        description:"Al poniente del centro de la ciudad existió una capilla dedicada a la virgen de la Purísima, era muy pequeña y sencilla, con paredes de adobe y muy sencilla. Para el último tercio del siglo XIX se construyó en la esquina de las calles de las Flores, hoy Serafín Peña y la calle Real hoy Hidalgo una segunda capilla de corte sencillo franciscano y construída de blockes de sillar y que al paso de los años tuvo algunas adecuaciones.\n\nPara finales del siglo XIX ante la construcción de la capilla se creó el barrio de la Purísima y se trazó una plaza frente a la capilla. Para diciembre de 1941 se demolió la capilla para dar paso en el mismo sitio a la actual Basílica de la Purísima.\n\nCabe destacar que se rescató gran parte de piedra laja de la anterior capilla para recubrir la torre de la actual edificio, además de la cruz que remataba el frontispicio de la capilla demolida está colocada en la parte alta de las oficinas situadas frente a la calle Hidalgo.",
        icon:'church',
        biblio:"Monterrey del Ayer"
    
    },

    { 
        coords: [25.669224798214486, -100.31535225928435],
        id:'juarezMata',
        title: "Revolucionarios",
        description:"Revolucionarios en 1912.",
        icon:'genericS'
    
    },

    { 
        coords: [25.671060150413165, -100.30613369926355],
        id:'presaChica',
        title: "Antigua calle de la Presa",
        description:"",
        icon:'genericS'
    
    },

    { 
        coords: [25.66389676220323, -100.31280976196005],
        id:'calleTeatroConsti',
        title: "Jacales en el lecho del rio Santa Catarina previo a su canalizacion",
        description:"",
        icon:'genericS'
    
    },

    { 
        coords: [25.67884659733056, -100.31015505799064],
        id:'granlogia',
        title: "Gran Logia Masónica de Nuevo León",
        description:"El edificio de la Gran Logia Masónica de Nuevo León, situado en la calle de Escobedo, entre M.M. del Llano y la calle de Tapia, fue inaugurado por el general Bernardo Reyes en 1906.",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.668276734541937, -100.31295452042518],
        id:'imprenta',
        title: "Imprenta Ramón Díaz y Cía.",
        description:"En la esquina suroeste de las calles de Padre Mier y Emilio Carranza estuvo a principios del siglo XX la imprenta ''El Modelo'', que era propiedad de los señores Rafael García y Gustavo Madero. Posteriormente se estableció allí la imprenta Ramón Díaz y Cía. que aparece en la fotografía.",
        icon:'store',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.667530273650712, -100.31393908650342],
        id:'morelosGaleana',
        title: "Vista de Morelos",
        description:"Vista de la calle de Morelos desde Galeana hacia el poniente, alrededor del año de 1899.",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.667309865532133, -100.31204383417108],
        id:'botica',
        title: "Botica “El León” ",
        description:"La esquina noroeste de las calles de Morelos y Escobedo fue ocupada por la botica El León a principios del siglo XX, anteriormente había estado por la calle de Padre Mier. Antes que la botica ocupara ese lugar, allí mismo habían estado las oficinas del Gobierno del Estado. El Presidente Benito Juarez residió también en este edificio durante su estancia en Monterrey en el año de 1864.",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.669118692472377, -100.3194060422919],
        id:'villistas',
        title: "Entrada de los villistas",
        description:"En la esquina de las calles Cuauhtémoc y Bolívar (hoy calle de Padre Mier) se ve un grupo de jinetes, destacándose entre ellos el general Raúl Madero, quien se detiene a saludar a su señora madre.",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.66783940335396, -100.31739812138083],
        id:'ccosmos',
        title: "Cine Cosmos",
        description:"",
        icon:'cinema',
    },

    { 
        coords: [25.670910968670515, -100.31512101015544],
        id:'allendeRamon',
        title: "Calle Juarez entre Allende y Juan Ignacio",
        description:"",
        icon:'genericS',
    },

    { 
        coords: [25.675715526166243, -100.31349931529044],
        id:'bautista',
        title: "Primera Iglesia Bautista de Monterrey",
        description:"",
        icon:'church',
    },
    { 
        coords: [25.663369030547337, -100.31583519121511],
        id:'comerciantesRio',
        title: "Comerciantes en el lecho del río Santa Catarina",
        description:"",
        icon:'genericS',
    },
    { 
        coords: [25.6553166688916, -100.31697999011939],
        id:'capLourdes',
        title: "Capilla de Lourdes",
        description:"Su construcción data del último cuarto del siglo XIX , de estilo neogótico muy dado en los templos europeos.Sus muros estaban compuestos de sillar ; su destrucción se dió a finales de los años veinte , ya que en los planos de Monterrey en 1930 ya no aparecía registrada.",
        icon:'church',
    },

    { 
        coords: [25.67998448394772, -100.31362300185242],
        id:'ciudadela',
        title: "La Ciudadela de Monterrey",
        description:"La ciudadela tiene origen en el siglo XVII cuando el señor De Llanos emprende la construccion de grandes obras materiales en Monterrey, una de ellas una catedral. El 26 de noviembre de de 1794 se pone la primera piedra de la catedral, pero el Ayuntamiento obstaculiza la obra por lo cual nunca se termina de la cual solo quedan sus gruesos muros. La catedral pudo haberse convertido en una gran obra, puesto que en proporciones era comparable a la Metropolitana de la CDMX. <br><br> Mas tarde en la guerra entre centralistas y federalistas los antiguos muros son adaptados a un fortin o ciudadela. Es tambien en 1846 en la guerra contra los estadounidenses donde se dispone que la estructura sea techada y se hagan los atrincheramientos necesarios. Finalmente en 1880 es demolido el viejo edificio para construir casas habitaciones.",
        icon:'generic',
        biblio:"Crónicas y Sucedidos del Monterrey de los siglos XIX y XX"
    },

    { 
        coords: [25.672300657831826, -100.31933357541799],
        id:'pgonza',
        title: "Plaza Gonzalitos",
        description:"Antigua Plaza que se ubicaba frente al hospital González. Me genera duda si esta estatua sera la misma que ahora se encuentra en la Facultad de Medicina UANL.",
        icon:'park',
    },

    { 
        coords: [25.65764376221677, -100.31427965110662],
        id:'bguadalupe',
        title: "Antiguo Santuario de Guadalupe",
        description:"El Antiguo Santuario de Guadalupe en Monterrey, ubicado en la colonia Independencia, tiene una historia ligada a la fe guadalupana y al desarrollo de la ciudad. Su construcción comenzó en 1895, con el objetivo de proporcionar un espacio de culto para los fieles que vivían en esa zona en crecimiento.<br><br> Para 1908, ya se había terminado la nave principal y parte de la fachada, momento en el que el templo se convirtió en vicaría fija bajo la jurisdicción de la Catedral Metropolitana de Monterrey. Durante décadas, el santuario funcionó como un importante centro religioso para los fieles de la región.",
        icon:'church',
    },
    { 
        coords: [25.682841960213626, -100.30030977064567],
        id:'salinasrocha',
        title: "Fábrica de camas ''Salinas y Rocha''",
        description:"La fábrica de camas Salinas y Rocha fue una empresa que después sería una de las más importantes fábricas de muebles en la ciudad; fue fundada por los señores Joel Rocha y Benjamín Salinas en el año de 1906. Estuvo situada en las manzana que ocupan las calles de Francisco I. Madero, Reforma, Álvaro Obregón y Julián Villarreal.",
        icon:'store',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.67815222999242, -100.31421582681186],
        id:'hospmonterrey',
        title: "Hospital Monterrey",
        description:"Este hospital Monterrey se encontraba en la esquina noroeste de las calles de Juárez y Espinosa. Fue fundado en 1901 gracias al apoyo de la iglesia metodista del sur de los Estados Unidos de América. Posteriormente en ese edificio estuvo una escuela preparatoria.",
        icon:'generic',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.669773492766108, -100.31522243962085],
        id:'juarezmatamoros',
        title: "Vista de la antigua Calle del Roble",
        description:"",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.676559866903016, -100.31391027573774],
        id:'capuchinas',
        title: "Plaza de las Capuchinas",
        description:"En el terreno donde se ubica el Mercado Juárez existió la Plaza de las Capuchinas, en el sitio era común la llegada de ferias y carpas para la distracción de los vecinos, en el costado sur de la plaza(hoy calle Aramberri) se instaló el primer edificio de la iglesia Bautista en Monterrey en el año de 1885. En el costado poniente de la plaza, en la acera poniente de la Calle del Roble (hoy Juárez) en 1890 se construyó una amplia casona de sillar para las monjas capuchinas que nunca llegaron a Monterrey y la casa finalmente fue ocupada como el Cuartel Iturbide.El Mercado Juárez se inauguró en el año de 1909.",
        icon:'genericS',
        biblio:"Monterrey del Ayer"
    },

    { 
        coords: [25.680222941317872, -100.31082794397317],
        id:'geronimo',
        title: "Casa del general Gerónimo Treviño",
        description:"",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.671761335018587, -100.33458016755523],
        id:'vistaBravo',
        title: "Calle de Padre Mier hacia el poniente",
        description:"Vista de la calle de Padre Mier desde la calle de Bravo hacia el poniente, con el obispado al fondo.",
        icon:'genericB',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.67169047181223, -100.31502822448032],
        id:'boticaroble',
        title: "Botica del Roble",
        description:"Esta botica del Roble, que a la vez era consultorio, estaba situada en la acera oriente de la calle Juárez, ente Juan Ignacio Ramón y Quince de Mayo. Inicialmente fue establecida por el doctor Melesio Martínez.",
        icon:'store',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.679157880880783, -100.31395796491309],
        id:'escuelaNormal',
        title: "Antiguo edificio de la Escuela Normal",
        description:"El antiguo edificio de la Escuela Normal, situado en la calle de Juárez, entre Tapia y la calle M. M. de Llano, se inauguró a principios del siglo XX, el 22 de mayo de 1903, aunque la escuela fue creada desde 1879.",
        icon:'generic',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.677447022459283, -100.32575810809288],
        id:'toros',
        title: "Antigua ''Plaza de toros Monterrey''",
        description:"Esta plaza de toros, que se construyó a principios del siglo XX, estaba situada en las calles de Arramberri y Porfirio Díaz..",
        icon:'generic',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.668296419653515, -100.31997924759217],
        id:'hmilitar',
        title: "Hospital Militar",
        description:"El Hospital militar estuvo situado en Hidalgo, entre las calles de Cuauhtémoc y Pino Suárez (anteriormente llamada calzada del Progreso).",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.67022927634254, -100.33003029177713],
        id:'tmirador',
        title: "Torre de mirador",
        description:"Esta casa fue propiedad del señor Juan López Peña, y estuvo situada en Hidalgo, entre las calles de Miguel Nieto y Martín de Zavala, y por la torre que sobresalía de la casa, a este rumbo se le conoce como la colonia del Mirador. Esta casa adquirió relevancia histórica porque el presidente Benito Juárez pasó allí una noche durante su visita a Monterrey en el año de 1864.",
        icon:'genericS',
        biblio:"Tec de Monterrey"
    },

    { 
        coords: [25.672456959646496, -100.34000012789328],
        id:'edamas',
        title: "Escuela de Damas",
        description:"Vista principal del Colegio del Sagrado Corazón de Jesús [también conocido como Colegio de las Damas] en Monterey, Nuevo León, principios del siglo XX. Se observa una construcción de forma rectangular de tres niveles en su lado oriente y de dos en el poniente, ubicada en el Cerro del Obispado [Padre Mier 1720]. Se aprecia un edificio conformado por tres secciones, una central y dos laterales, diseñado y construido por el arquitecto Pedro Gorozpe. En la sección central se observa la puerta principal de madera de doble hoja, acompañada de dos ventanas laterales. Las secciones laterales mantienen un ritmo de repetición muro-ventana a lo largo del segundo y el tercer nivel. Las fachadas del edificio están compuestas de ladrillo bicromático. Desde el 19 de septiembre de 1977 alberga a la Escuela Superior de Música y Danza de Monterrey.",
        icon:'genericS',
        biblio:"UNAM & Tec de Monterrey"
    },

    { 
        coords: [25.673366610025816, -100.34240188784415],
        id:'obispado',
        title: "El Obispado",
        description:"El edificio que hoy se conoce como El Obispado, fue originalmente construido con el propósito de que sirviera como casa de retiro al obispo fray Rafael José Verger, construyendo también una capilla aledaña. Desde 1816 el edificio fue usado como cuartel en varias ocasiones, hasta que en 1956 se le dedicó para servir como Museo Regional.",
        icon:'generic',
        biblio:"Tec de Monterrey"
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
        const path = `images/${id}/i${index}.webp`;
        console.log(path);
        
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


function lazyLoadImages() {
    const images = document.querySelectorAll('.carousel-image[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; 
                img.removeAttribute('data-src'); 
                observer.unobserve(img); 
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

// Llama a esta función después de renderizar las imágenes
lazyLoadImages();

let currentIndex = 0;

async function openModal(title, description, id, biblio) {
    const images = await getImages(id); 
    document.getElementById('modalTitle').textContent = title;

    // Reemplazar saltos de línea con <br> para que se muestren en HTML
    const formattedDescription = description.replace(/\n/g, '<br>');
    document.getElementById('modalDescription').innerHTML = formattedDescription;

    // Agregar bibliografía si está presente
    if (biblio) {
        if(biblio=="Monterrey del Ayer"){
            const biblioElement = document.createElement('p');
            biblioElement.innerHTML = `<strong>Fuente:</strong> <a href="https://www.facebook.com/profile.php?id=100064729897342">${biblio}</a>`;
            document.getElementById('modalDescription').appendChild(biblioElement);
        }else{
            const biblioElement = document.createElement('p');
            biblioElement.innerHTML = `<strong>Fuente:</strong> ${biblio}`;
            document.getElementById('modalDescription').appendChild(biblioElement);
        }
        
    }

    const carousel = document.querySelector('.image-carousel');
    carousel.innerHTML = images
        .map((img, index) => `<img  data-src="${img}"  class="carousel-image ${index === 0 ? 'active' : ''}" alt="Imagen" onclick="zoomImage(${index})" loading="lazy">`)
        .join('');

    lazyLoadImages();

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

function updateCarouselButtons() {
    const images = document.querySelectorAll('.carousel-image');
    document.getElementById('prevButton').disabled = currentIndex === 0;
    document.getElementById('nextButton').disabled = currentIndex === images.length - 1;
}





document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});



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
            openModal(marker.title, marker.description,marker.id,null);
        }
        
    });
});

// Event listeners for modal navigation buttons
document.getElementById('prevButton').addEventListener('click', prevImage);
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('closeButton').addEventListener('click', closeModal);

