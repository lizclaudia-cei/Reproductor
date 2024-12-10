// ------------------------------------
//  Variables
//------------------------------------
const songs =[
    {
        artist:"Justin Bieber",
        title: "Ghost",
        img:"./assets/img/justin_bieber.jpg",
        url:"./assets/audio/ghost.mp3"
     },
    {
        artist:"Demi Lovato",
        title: "Chula",
        img:"./assets/img/demi_lovato.jpeg",
        url:"./assets/audio/chula.mp3"
     },
     {
        artist:"Fuerza Regida",
        title: "Crazyz",
        img:"./assets/img/fuerza_regida.jpg",
        url:"/assets/audio/crazyz.mp3"
     },
    {
        artist:"Carin Leon",
        title: "Triste",
        img:"./assets/img/carin_leon.jpg",
        url:"./assets/audio/triste.mp3"
     },
  {
        artist:"Beret",
        title: "Pandora",
        img:"./assets/img/beret.jpg",
        url:"./assets/audio/pandora.mp3"
     },
]

let id = 0;

// Elementos del HTMl
const mainDiv = document.getElementById('mainDiv');
const divNowListen = document.getElementById('divNowListen');

const btnTem3 = document.getElementById('btnTem3');
const btnStop = document.getElementById('btnStop');
const btnPlay = document.getElementById('btnPlay');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');




// ------------------------------------
//  Funciones
//------------------------------------

/**
 * Funcion para recorrer el array e imprimir cada valor
 * @param Array - Se pasa el array a recorrer
 * 
 */
function nowNames(arreglo) {
    arreglo.map((elemento) => {
        console.log(elemento);
    })
}

/**
 * Funcion para devolver un elemento html por cada elemento de la lista
 * 
 */
function createElement() {
    const elements = songs.map((song, index) => {
        return `<div id=${song.title} class="Main-box">
                <img src="${song.img}" class="Main-img" alt="Imagen del artista ${song.artist}">
                <p class="u-text">${song.artist}</p>
                <p class="u-text">${song.title}</p>
            </div>`

    }).join('');
    console.log(elements);
    return elements;
}

/**
 * Funcion para devolver un elemento html con la cancion artista e imagen en posicion 3 del arreglo
 * @param {Number} - posicion del elemento
 */
function nowListen(position) {
    console.log(songs[position]);
    let nowSong = songs[position].title;
    let nowArtist = songs[position].artist;
    let nowImage = songs[position].img;
    let nowUrlSong = songs[position].url;
    const newList = [`${nowImage}`, `${nowArtist}`, `${nowSong}`, `${nowUrlSong}`];
    return `<div class="Main-box">
    <img src="${newList[0]}" class="Main-img" alt="Imagen del artista ${newList[1]}">
    <p class="u-text">${newList[1]}</p>
    <p class="u-text">${newList[2]}</p>
    <audio id="myAudio" controls>
    <source src="${newList[3]}" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    </div>`;
        // si lo que deseo es solo cambiarl el src del mp3
        // audio.src = urlSongs[position];
}

/**
 * Funcion para que imprima en pantalla la cancion y el artista seleccionada
 * @param {String} - id del boton seleccionado
 * @returns {number} - index del array
 */
function printConsole(id) {
    let index;
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].title == id) {
            index = i;
            console.log(`La cancion seleccionada es: ${songs[i].title} y es interpretada por el artista ${songs[i].artist}`);
            divNowListen.innerHTML = nowListen(i);
        }
    }
    return index;

}

/**
 * Funcion para colocar y remover la clase isActive a los elementos
 * @param {*} event 
 */
function handleActiveClass(event) {
    // Eliminar la clase 'isActive' de todos los elementos
    document.querySelectorAll('.Main-box').forEach(element => {
        element.classList.remove('isActive');
    });

    // Agregar la clase 'isActive' solo al elemento clicado
    event.currentTarget.classList.add('isActive');

    // Imprimir en consola el id del botón clicado
    id = printConsole(event.currentTarget.id);
}

/**
 * Funcion para actualizar la clase isActive
 */
function updateActiveClass() {
    // Eliminar la clase 'isActive' de todos los elementos
    document.querySelectorAll('.Main-box').forEach(element => {
        element.classList.remove('isActive');
    });

    // Agregar la clase 'isActive' al elemento actual basado en el índice
    const currentElement = document.getElementById(songs[id].title);
    currentElement.classList.add('isActive');
}

//Funcion que le agrega un evento click al boton y que al hacer click en el 
// boton imprime en consola el id del boton al cual se le dio click.
btnStop.addEventListener('click', (event) => {
    console.log(event.target.id);
});




// ------------------------------------
//  Eventos
//------------------------------------

mainDiv.innerHTML = createElement();
btnTem3.addEventListener('click', () => { id = 3; divNowListen.innerHTML = nowListen(3); 

    updateActiveClass();
})


//------------------------------------------------------------------------------------------------
// Elementos HTML a los cuales se les coloca el id despues de que se ejecuto el codgio anterior
//------------------------------------------------------------------------------------------------
const songChula = document.getElementById('Chula');
const songGhost = document.getElementById('Ghost');
const songCrazy = document.getElementById('Crazyz');
const songTriste = document.getElementById('Triste');
const songPandora = document.getElementById('Pandora');



// ------------------------------------
//  Eventos
//------------------------------------


songGhost.addEventListener('click', handleActiveClass);
songCrazy.addEventListener('click', handleActiveClass);
songTriste.addEventListener('click', handleActiveClass);
songPandora.addEventListener('click', handleActiveClass);
songChula.addEventListener('click', handleActiveClass);



btnNext.addEventListener('click', () => {
    id++;
    if (id > songs.length - 1) {
        id = 0;
    }
    divNowListen.innerHTML = nowListen(id);
    updateActiveClass();
});
btnBack.addEventListener('click', () => {
    id--;
    if (id > (songs.length - 1) || id < 0) {
        id = songs.length - 1;
    }
    divNowListen.innerHTML = nowListen(id);
    updateActiveClass();
});


btnPlay.addEventListener('click', () => {
    const listen = document.getElementById('myAudio');
 
    listen.play();
    
});
btnStop.addEventListener('click', () => {
    const listen = document.getElementById('myAudio');
    
    listen.pause();
});


