# Reproductor
Comenzaremos a trabajar con arrays prácticando con los siguientes ejercicios. 

1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción.
2. Crear un array con 5 artistas que correspondan a cada canción del primer array.
3. Mostrar en un HTML un DIV por cada canción y artista generado con JS a partir de la información del array.
4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array.
5. Agrega botones de "siguiente", "anterior", "play", "pausa" con ids únicos para cada uno, y agrega el siguiente código JS en tu archivo, pruebalo y comenta que hace el código:

```js
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});
```

6. Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente.
7. Actualiza el punto anterior para mostrar en el HTML un párrafo con el nombre de la canción y el artista de la canción correspondiente al hacer click en cada div. Te animas a agregar un tercer array con imágenes del artista y mostrar la imagen correspondiente al hacer click en cada div?
8. Dale la funcionalidad necesaria a los botones Siguiente, Anterior para que pase de una canción a otra en el array de canciones mostrado en el HTML.