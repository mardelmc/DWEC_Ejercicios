window.addEventListener('DOMContentLoaded', main);
function main() {
    const pueblo = document.querySelector('#pueblo');
    const provincias = prepararProvincias();
    pueblo.addEventListener('change'/*input*/, function(e) {
        provinciaSeleccionada = buscarPueblo(provincias, e.target.value)
        if (provinciaSeleccionada != ""){
            console.log(provinciaSeleccionada);
            seleccionarProvincia(provinciaSeleccionada);
            cambiarEscudo(provinciaSeleccionada);
        } 
    });
     
}

function buscarPueblo(provincias, pueblo){
    let salida = "" 
    for (const provincia in provincias) {
        if (provincias.hasOwnProperty(provincia)) {
          if (provincias[provincia].includes(pueblo)) {
            console.log(provincia);
            salida = provincia;
          }
        }
    }
    return salida;
}

function cambiarEscudo(provincia){
    let escudos = new Array();
    escudos ['Almería'] = 'img/Escudo_de_la_provincia_de_Almería.svg';
    escudos ['Cádiz'] = 'img/Escudo_de_la_provincia_de_Cádiz.svg';
    escudos ['Granada'] = 'img/Escudo_de_la_provincia_de_Granada.svg';
    escudos ['Jaén'] = 'img/Escudo_de_la_provincia_de_Jaén.svg';
    escudos ['Málaga'] = 'img/Escudo_de_la_provincia_de_Málaga.svg';
    escudos ['Sevilla'] = 'img/Escudo_de_la_provincia_de_Sevilla.svg';
    escudos ['Huelva'] = 'img/Escudo_de_la_provincia_de_Huelva.svg';
    escudos ['Córdoba'] = 'img/Escudo_de_la_provincia_de_Córdoba.svg';
    const imagen = document.querySelector('#escudo img');
    imagen.src = escudos[provincia];
    if (imagen.src == undefined) imagen.src = 'img/Escudo_de_Andalucía.svg';
}

function seleccionarProvincia(provincia){
    provincia = provincia.toLowerCase();
    provincia = removeAccents(provincia);
    console.log(provincia);
    let seleccionadoC = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < seleccionadoC.length; i++) {
        if (seleccionadoC[i].id == provincia){
            let seleccion = seleccionadoC[i];
            seleccion.checked = true;
        }
    }
}

function prepararProvincias(){
    const PROVINCIAS = {
        'Jaén': ['Albanchez de Mágina', 'Alcalá la Real', 'Alcaudete', 'Aldeaquemada', 'Andújar', 'Arjona', 'Arjonilla', 'Arquillos', 'Arroyo del Ojanco', 'Baeza', 'Bailén', 'Baños de la Encina', 'Beas de Segura', 'Bedmar y Garcíez', 'Begíjar', 'Benatae', 'Cabra del Santo Cristo', 'Cambil', 'Campillo de Arenas', 'Canena', 'Carboneros', 'Cárcheles', 'Carolina', 'Castellar', 'Castillo de Locubín', 'Cazalilla', 'Cazorla', 'Chiclana de Segura', 'El Castellar', 'Escañuela', 'Espelúy', 'Frailes', 'Fuensanta de Martos', 'Fuerte del Rey', 'Génave', 'Guardia de Jaén', 'Guarromán', 'Higuera de Calatrava', 'Hinojares', 'Hornos', 'Huelma', 'Huesa', 'Ibros', 'Iruela', 'Iznatoraf', 'Jabalquinto', 'Jaén', 'Jamilena', 'Jimena', 'Jódar', 'La Carolina', 'La Guardia', 'La Iruela', 'Lahiguera', 'Larva', 'Linares', 'Lopera', 'Lupión', 'Mancha Real', 'Marmolejo', 'Martos', 'Mengíbar', 'Montizón', 'Navas de San Juan', 'Noalejo', 'Orcera', 'Peal de Becerro', 'Pegalajar', 'Porcuna', 'Pozo Alcón', 'Puente de Génave', 'Puerta de Segura', 'Quesada', 'Rus', 'Sabiote', 'Santa Elena', 'Santiago de Calatrava', 'Santiago-Pontones', 'Santisteban del Puerto', 'Santo Tomé', 'Segura de la Sierra', 'Siles', 'Sorihuela del Guadalimar', 'Torre del Campo', 'Torreblascopedro', 'Torredonjimeno', 'Torreperogil', 'Torres', 'Torres de Albánchez', 'Úbeda', 'Valdepeñas de Jaén', 'Vilches', 'Villacarrillo', 'Villanueva de la Reina', 'Villanueva del Arzobispo', 'Villardompardo', 'Villares', 'Villarrodrigo', 'Villatorres'],
        'Córdoba': ['Adamuz', 'Aguilar de la Frontera', 'Alcaracejos', 'Almedinilla', 'Almodóvar del Río', 'Añora', 'Baena', 'Belalcázar', 'Belmez', 'Benamejí', 'Blázquez', 'Bujalance', 'Cabra', 'Cañete de las Torres', 'Carcabuey', 'Cardeña', 'Carlota', 'Carpio', 'Castro del Río', 'Conquista', 'Córdoba', 'Doña Mencía', 'Dos Torres', 'Encinas Reales', 'Espejo', 'Espiel', 'Fernán-Núñez', 'Fuente Carreteros', 'Fuente la Lancha', 'Fuente Obejuna', 'Fuente Palmera', 'Fuente-Tójar', 'Granjuela', 'Guadalcázar', 'Guijo', 'Hinojosa del Duque', 'Hornachuelos', 'Iznájar', 'Lucena', 'Luque', 'Montalbán de Córdoba', 'Montemayor', 'Montilla', 'Montoro', 'Monturque', 'Moriles', 'Nueva Carteya', 'Obejo', 'Palenciana', 'Palma del Río', 'Pedro Abad', 'Pedroche', 'Peñarroya-Pueblonuevo', 'Posadas', 'Pozoblanco', 'Priego de Córdoba', 'Puente Genil', 'Rambla', 'Rute', 'San Sebastián de los Ballesteros', 'Santa Eufemia', 'Santaella', 'Torrecampo', 'Valenzuela', 'Valsequillo', 'Victoria', 'Villa del Río', 'Villafranca de Córdoba', 'Villaharta', 'Villanueva de Córdoba', 'Villanueva del Duque', 'Villanueva del Rey', 'Villaralto', 'Villaviciosa de Córdoba', 'Viso', 'Zuheros'],
        'Granada': ['Alamedilla', 'Albolote', 'Albondón', 'Albuñán', 'Albuñol', 'Albuñuelas', 'Aldeire', 'Alfacar', 'Algarinejo', 'Alhama de Granada', 'Alhendín', 'Alicún de Ortega', 'Almegíjar', 'Almuñécar', 'Alpujarra de la Sierra', 'Alquife', 'Arenas del Rey', 'Armilla', 'Atarfe', 'Baza', 'Beas de Granada', 'Beas de Guadix', 'Benalúa', 'Benalúa de las Villas', 'Benamaurel', 'Bérchules', 'Bubión', 'Cacín', 'Cádiar', 'Cájar', 'Calahorra', 'Calicasas', 'Campotéjar', 'Caniles', 'Cáñar', 'Capileira', 'Carataunas', 'Cástaras', 'Castilléjar', 'Castril', 'Cenes de la Vega', 'Chauchina', 'Chimeneas', 'Churriana de la Vega', 'Cijuela', 'Cogollos de Guadix', 'Cogollos Vega', 'Colomera', 'Cortes de Baza', 'Cortes y Graena', 'Cuevas del Campo', 'Cúllar', 'Cúllar Vega', 'Darro', 'Dehesas de Guadix', 'Dehesas Viejas', 'Deifontes', 'Diezma', 'Dílar', 'Dólar', 'Domingo Pérez de Granada', 'Dúdar', 'Dúrcal', 'Escúzar', 'Ferreira', 'Fonelas', 'Freila', 'Fuente Vaqueros', 'Las Gabias', 'Galera', 'Gobernador', 'Gójar', 'Gor', 'Gorafe', 'Granada', 'Guadahortuna', 'Guadix', 'Los Guajares', 'Gualchos', 'Guaro', 'Humilladero', 'Igualeja', 'Istán', 'Iznate', 'Jayena', 'Jérez del Marquesado', 'Jete', 'Jun', 'Juviles', 'Láchar', 'Lanjarón', 'Lanteira', 'Lecrín', 'Lentegí', 'Lobras', 'Loja', 'Lugros', 'Lújar', 'Maçanet de Cabrenys', 'Malahá', 'Maracena', 'Marchal', 'Moclín', 'Molvízar', 'Monachil', 'Montefrío', 'Montejícar', 'Montillana', 'Moraleda de Zafayona', 'Morelábor', 'Motril', 'Murtas', 'La Malahá', 'Nevada', 'Nigüelas', 'Nívar', 'Ogíjares', 'Orce', 'Órgiva', 'Otívar', 'Otura', 'Padul', 'Pampaneira', 'Pedro Martínez', 'Peligros', 'Peza', 'Píñar', 'Pinos Genil', 'Pinos Puente', 'Píñar', 'Polícar', 'Polopos', 'Pórtugos', 'Puebla de Don Fadrique', 'Pulianas', 'Purullena', 'Quéntar', 'Rubite', 'Salar', 'Salobreña', 'Santa Cruz del Comercio', 'Santa Fe', 'Soportújar', 'Sorvilán', 'Taha', 'Torre-Cardela', 'Torvizcón', 'Trevélez', 'Turón', 'Ugíjar', 'Valle', 'Valle del Zalabí', 'Válor', 'Vegas del Genil', 'Vélez de Benaudalla', 'Ventas de Huelma', 'Villamena', 'Villanueva de las Torres', 'Villanueva Mesía', 'Víznar', 'Zafarraya', 'Zagra', 'La Zubia', 'Zújar'],
        'Almería': ['Adra', 'Albánchez', 'Alboloduy', 'Albox', 'Alcolea', 'Alcóntar', 'Alcudia de Monteagud', 'Alhabia', 'Alhama de Almería', 'Alicún', 'Almería', 'Almócita', 'Alsodux', 'Antas', 'Arboleas', 'Armuña de Almanzora', 'Bacares', 'Bayárcal', 'Bayarque', 'Bédar', 'Beires', 'Benahadux', 'Benitagla', 'Benizalón', 'Bentarique', 'Berja', 'Canjáyar', 'Cantoria', 'Carboneras', 'Castro de Filabres', 'Chercos', 'Chirivel', 'Cóbdar', 'Cuevas del Almanzora', 'Dalías', 'El Ejido', 'Enix', 'Felix', 'Fines', 'Fiñana', 'Fondón', 'Gádor', 'Gallardos (Los)', 'Garrucha', 'Gérgal', 'Huécija', 'Huércal de Almería', 'Huércal-Overa', 'Illar', 'Instinción', 'Laroya', 'Láujar de Andarax', 'Líjar', 'Lubrín', 'Lucainena de las Torres', 'Lúcar', 'Macael', 'María', 'Mojácar', 'La Mojonera', 'Nacimiento', 'Níjar', 'Ohanes', 'Olula de Castro', 'Olula del Río', 'Oria', 'Padules', 'Partaloa', 'Paterna del Río', 'Pechina', 'Pulpí', 'Purchena', 'Rágol', 'Rioja', 'Roquetas de Mar', 'Santa Cruz de Marchena', 'Santa Fe de Mondújar', 'Senés', 'Serón', 'Sierro', 'Somontín', 'Sorbas', 'Suflí', 'Tabernas', 'Taberno', 'Tahal', 'Terque', 'Tíjola', 'Tres Villas (Las)', 'Turre', 'Turrillas', 'Uleila del Campo', 'Urrácal', 'Velefique', 'Vélez-Blanco', 'Vélez-Rubio', 'Vera', 'Viator', 'Vícar', 'Zurgena'],
        'Málaga': ['Alameda', 'Alcaucín', 'Alfarnate', 'Alfarnatejo', 'Algarrobo', 'Algatocín', 'Alhaurín de la Torre', 'Alhaurín el Grande', 'Almáchar', 'Almargen', 'Almogía', 'Álora', 'Alozaina', 'Alpandeire', 'Antequera', 'Árchez', 'Archidona', 'Ardales', 'Arenas', 'Arriate', 'Atajate', 'Benadalid', 'Benahavís', 'Benalauría', 'Benalmádena', 'Benamargosa', 'Benamocarra', 'Benaoján', 'Benarrabá', 'Borge (El)', 'Burgo (El)', 'Campillos', 'Canillas de Aceituno', 'Canillas de Albaida', 'Carratraca', 'Cartajima', 'Cártama', 'Casabermeja', 'Casariche', 'Castilblanco de los Arroyos', 'Castilleja de Guzmán', 'Chilches', 'Churriana', 'Colmenar', 'Comares', 'Cómpeta', 'Cortes de la Frontera', 'Cuevas Bajas', 'Cuevas de San Marcos', 'Cuevas del Becerro', 'Cútar', 'Estepona', 'Faraján', 'Frigiliana', 'Fuengirola', 'Fuente de Piedra', 'Gaucín', 'Genalguacil', 'Guaro', 'Humilladero', 'Igualeja', 'Istán', 'Iznate', 'Jimera de Líbar', 'Jubrique', 'Júzcar', 'Macharaviaya', 'Málaga', 'Manilva', 'Marbella', 'Mijas', 'Moclinejo', 'Mollina', 'Monda', 'Montejaque', 'Nerja', 'Ojén', 'Parauta', 'Periana', 'Pizarra', 'Pujerra', 'Rincón de la Victoria', 'Riogordo', 'Ronda', 'Salares', 'Sayalonga', 'Sedella', 'Sierra de Yeguas', 'Teba', 'Tolox', 'Torremolinos', 'Torrox', 'Totalán', 'Valle de Abdalajís', 'Vélez-Málaga', 'Villamanrique de la Condesa', 'Villanueva de Algaidas', 'Villanueva de Tapia', 'Villanueva del Rosario', 'Villanueva del Trabuco', 'Viñuela', 'Yunquera'],
        'Sevilla': ['Alanís', 'Albaida del Aljarafe', 'Alcalá de Guadaíra', 'Alcalá del Río', 'Alcolea del Río', 'La Algaba', 'Algámitas', 'Almadén de la Plata', 'Almensilla', 'Arahal', 'Aznalcázar', 'Aznalcóllar', 'Badolatosa', 'Benacazón', 'Bollullos de la Mitación', 'Bormujos', 'Brenes', 'Burguillos', 'Las Cabezas de San Juan', 'Camas', 'La Campana', 'Cantillana', 'Carmona', 'Carrión de los Céspedes', 'Casariche', 'Castilblanco de los Arroyos', 'Castilleja de Guzmán', 'Castilleja de la Cuesta', 'Castilleja del Campo', 'Cazalla de la Sierra', 'Constantina', 'Coria del Río', 'Coripe', 'Coronil', 'Los Corrales', 'El Cuervo', 'Dos Hermanas', 'Écija', 'Estepa', 'Fuentes de Andalucía', 'El Garrobo', 'Gelves', 'Gerena', 'Gilena', 'Gines', 'Guadalcanal', 'Guillena', 'Herrera', 'Huévar del Aljarafe', 'Isla Mayor', 'Lantejuela', 'Lebrija', 'Lora de Estepa', 'Lora del Río', 'Luisiana', 'El Madroño', 'Mairena del Alcor', 'Mairena del Aljarafe', 'Marchena', 'Marinaleda', 'Martín de la Jara', 'Los Molares', 'Montellano', 'Morón de la Frontera', 'Navas de la Concepción', 'Olivares', 'Osuna', 'Palacios y Villafranca', 'Palomares del Río', 'Paradas', 'Pedrera', 'Pedroso', 'Peñaflor', 'Pilas', 'Pruna', 'La Puebla de Cazalla', 'La Puebla de los Infantes', 'La Puebla del Río', 'El Real de la Jara', 'La Rinconada', 'La Roda de Andalucía', 'El Ronquillo', 'Rubio', 'Salteras', 'San Juan de Aznalfarache', 'San Nicolás del Puerto', 'Sanlúcar la Mayor', 'Santiponce', 'El Saucejo', 'Sevilla', 'Tocina', 'Tomares', 'Umbrete', 'Utrera', 'Valencina de la Concepción', 'Villamanrique de la Condesa', 'Villanueva de San Juan', 'Villanueva del Ariscal', 'Villanueva del Río y Minas', 'Villaverde del Río', 'El Viso del Alcor'],
        'Huelva': ['Alájar', 'Aljaraque', 'Almendro', 'Almonaster la Real', 'Almonte', 'Alosno', 'Aracena', 'Aroche', 'Arroyomolinos de León', 'Ayamonte', 'Beas', 'Berrocal', 'Bollullos Par del Condado', 'Bonares', 'Cabezas Rubias', 'Cala', 'Calañas', 'Campillo', 'Campofrío', 'Cañaveral de León', 'Cartaya', 'Castaño del Robledo', 'Cerro de Andévalo', 'Chucena', 'Corteconcepción', 'Cortegana', 'Cortelazor', 'Cumbres de Enmedio', 'Cumbres de San Bartolomé', 'Cumbres Mayores', 'Encinasola', 'Escacena del Campo', 'Fuenteheridos', 'Galaroza', 'Gibraleón', 'Granada de Río-Tinto', 'Granado', 'Higuera de la Sierra', 'Hinojales', 'Hinojos', 'Huelva', 'Isla Cristina'],
        'Cádiz': ['Alcalá de los Gazules', 'Alcalá del Valle', 'Algar', 'Algeciras', 'Algodonales', 'Arcos de la Frontera', 'Barbate', 'Los Barrios', 'Benalup-Casas Viejas', 'Benaocaz', 'Bornos', 'Cádiz', 'Castellar de la Frontera', 'Chiclana de la Frontera', 'Chipiona', 'Conil de la Frontera', 'Espera', 'El Gastor', 'Grazalema', 'Jerez de la Frontera', 'Jimena de la Frontera', 'La Línea de la Concepción', 'Medina-Sidonia', 'Olvera', 'Paterna de Rivera', 'Prado del Rey', 'El Puerto de Santa María', 'Puerto Real', 'Puerto Serrano', 'Rota', 'San Fernando', 'San José del Valle', 'San Roque', 'Sanlúcar de Barrameda', 'Setenil de las Bodegas', 'Tarifa', 'Torre Alháquime', 'Trebujena', 'Ubrique', 'Vejer de la Frontera', 'Villaluenga del Rosario', 'Villamartín', 'Zahara'] 
    };
    return PROVINCIAS;
}


// No es mio
function removeAccents(text) {
    const sustitutions = {
      àáâãäå: "a",
      ÀÁÂÃÄÅ: "A",
      èéêë: "e",
      ÈÉÊË: "E",
      ìíîï: "i",
      ÌÍÎÏ: "I",
      òóôõö: "o",
      ÒÓÔÕÖ: "O",
      ùúûü: "u",
      ÙÚÛÜ: "U",
      ýÿ: "y",
      ÝŸ: "Y",
      ß: "ss",
      ñ: "n",
      Ñ: "N"
    };
    // Devuelve un valor si 'letter' esta incluido en la clave
  function getLetterReplacement(letter, replacements) {
    const findKey = Object.keys(replacements).reduce(
      (origin, item, index) => (item.includes(letter) ? item : origin),
      false
    );
    return findKey !== false ? replacements[findKey] : letter;
  }
  // Recorre letra por letra en busca de una sustitución
  return text
    .split("")
    .map((letter) => getLetterReplacement(letter, sustitutions))
    .join("");
}
