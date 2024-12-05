// ------------------------------------
//  Variables
//------------------------------------
const artists = ['Justin Bieber', 'Demi Lovato', 'Fuerza Regida', 'Carin Leon', 'Beret'];
const songs = ['Ghost', 'Chula', 'Crazy', 'Triste', 'Pandora'];
const images = ['./assets/justin_bieber.jpg', './assets/demi_lovato.jpeg', './assets/fuerza_regida.jpg', './assets/carin_leon.jpg', './assets/beret.jpg'];

// Elementos del HTMl
const mainDiv = document.getElementById('mainDiv');
const btnTem3 = document.getElementById('btnTem3');
const divNowListen = document.getElementById('divNowListen');

const btnStop = document.getElementById('btnStop');
const btnPlay = document.getElementById('btnPlay');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
let id = 0;


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
        return `<div id=${song} class="Main-box">
                <img src="${images[index]}" class="Main-img" alt="">
                <p class="u-text">${artists[index]}</p>
                <p class="u-text">${song}</p>
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
    let nowSong = songs[position];
    let nowArtist = artists[position];
    let nowImage = images[position];
    const newList = [`${nowImage}`, `${nowArtist}`, `${nowSong}`];
    console.log(newList);
    return `<div class="Main-box">
    <img src="${newList[0]}" class="Main-img" alt="">
    <p class="u-text">${newList[1]}</p>
    <p class="u-text">${newList[2]}</p></div>`;
}

/**
 * Funcion para que imprima en pantalla la cancion y el artista seleccionada
 * @param {String} - id del boton seleccionado
 * @returns {number} - index del array
 */
function printConsole(id) {
    let index; 
    for (let i = 0; i < songs.length; i++) {
        if (songs[i] == id) {
            index=i;
            let artist = artists[i];
            console.log(`La cancion seleccionada es: ${songs[i]} y es interpretada por el artista ${artist}`);
         divNowListen.innerHTML = nowListen(i);
        }  
    }
    return index;

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
btnTem3.addEventListener('click', () => { id = 3; divNowListen.innerHTML = nowListen(3); })


//---------------------------------
// Elementos HTML
//-----------------------------------
const songChula = document.getElementById('Chula');
const songGhost = document.getElementById('Ghost');
const songCrazy = document.getElementById('Crazy');
const songTriste = document.getElementById('Triste');
const songPandora = document.getElementById('Pandora');


// ------------------------------------
//  Eventos
//------------------------------------

songChula.addEventListener('click', (event) => {
    id = printConsole(event.target.id);
})
songGhost.addEventListener('click', (event) => {
   id = printConsole(event.target.id);
})
songCrazy.addEventListener('click', (event) => {
   id = printConsole(event.target.id);
})
songTriste.addEventListener('click', (event) => {
    id = printConsole(event.target.id);
})
songPandora.addEventListener('click', (event) => {
   id = printConsole(event.target.id);
})

btnNext.addEventListener('click', ()=>{
    id ++;
    if(id>songs.length-1){
        id = 0;
    }
    divNowListen.innerHTML = nowListen(id);
})
btnBack.addEventListener('click',()=>{
    
    id --;
    if(id>(songs.length-1) || id<0){
        id = songs.length-1;
    }
    divNowListen.innerHTML = nowListen(id);
} )