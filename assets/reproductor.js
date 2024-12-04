// ------------------------------------
//  Variables
//------------------------------------
const artists = ['Justin Bieber', 'Demi Lovato','Fuerza Regida','Carin Leon','Beret'];
const songs = ['Ghost','Chula','Crazy','Triste','Pandora'];
const images = ['./descarga.jpeg','./descarga.jpeg','./descarga.jpeg','./descarga.jpeg','./descarga.jpeg'];

// Elementos del HTMl
const mainDiv = document.getElementById('mainDiv');


// ------------------------------------
//  Funciones
//------------------------------------

/**
 * Funcion para recorrer el array e imprimir cada valor
 * @param Array - Se pasa el array a recorrer
 * 
 */
function nowNames(arreglo){
    arreglo.map((elemento)=>{
        rconsole.log(elemento);
    })
}

/**
 * Funcion para devolver un elemento html por cada elemento de la lista
 * 
 */
function createElement(){
   const elements =  songs.map((song, index)=>{
        return `<div class="Main-box">
                <img src="${images[index]}" alt="">
                <p class="u-text">${artists[index]}</p>
                <p class="u-text">${song}</p>
            </div>`
    })
    console.log(elements); 
    return elements;
}



// ------------------------------------
//  Eventos
//------------------------------------


mainDiv.innerHTML = createElement();
