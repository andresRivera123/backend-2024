/*
Para iniciar el entorno debemos escribir node y la ruta: node 1-node index.js 
Node.js es un entorno diferente al navegador, por ejemplo window no existe en node.js
*/

console.log("Hola");
/* globalThis es una propiedad global y suele contener  funciones, métodos como fetch, Math, console.log, etc. Ej: globalThis.fetch() o globalThis.console.log()*/
/* ⬇ Es una variable global en toda nuesta aplicación y la utilizaremos SIEMPRE en node
    
*/
console.log(globalThis)

/* Patrón de diseño: Modulo */
/* Vamos a separar nuestro código en diferentes ficheros y los podremos importar y exportar para que se reutilize.*/
