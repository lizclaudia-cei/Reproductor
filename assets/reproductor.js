// ------------------------------------
//  Variables
//------------------------------------
const artists = ['Justin Bieber', 'Demi Lovato','Fuerza Regida','Carin Leon','Beret'];
const songs = ['Ghost','Chula','Crazy','Triste','Pandora'];
const images = ['./assets/justin_bieber.jpg','./assets/demi_lovato.jpeg','./assets/fuerza_regida.jpg','./assets/carin_leon.jpg','./assets/beret.jpg'];

// Elementos del HTMl
const mainDiv = document.getElementById('mainDiv');
const btnTem3 = document.getElementById('btnTem3');
const divNowListen = document.getElementById('divNowListen');

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
        console.log(elemento);
    })
}

/**
 * Funcion para devolver un elemento html por cada elemento de la lista
 * 
 */
function createElement(){
   const elements =  songs.map((song, index)=>{
        return `<div class="Main-box">
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
function nowListen(position){
   let nowSong =songs[position];
    console.log(nowSong)
 let   nowArtist = artists[position];
  let  nowImage = images[position];
  const  newList = [`${nowImage}`,`${nowArtist}`,`${nowSong}`];
console.log(newList);
    return `<div class="Main-box">
    <img src="${newList[0]}" class="Main-img" alt="">
    <p class="u-text">${newList[1]}</p>
    <p class="u-text">${newList[2]}</p>
</div>`;
    // const elementListen = songs.map((song)=>{
    //     return 
    // }).join('');
}



// ------------------------------------
//  Eventos
//------------------------------------


mainDiv.innerHTML = createElement();
btnTem3.addEventListener('click',()=>{divNowListen.innerHTML = nowListen(3);})

