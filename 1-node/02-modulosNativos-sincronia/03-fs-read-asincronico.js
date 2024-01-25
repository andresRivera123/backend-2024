console.log(" FORMA ASINCRONA LEER ARCHIVOS ");
/* FS Read file - Leer archivos*/
const fs = require('node:fs')

/* Vamos a utilizar callbacks para hacerlo asincronico*/
const text = fs.readFile("./archivo.txt", "utf-8", (err, text) => { // ⬅ Funciones que se ejecutan cuando una tarea a terminado
    console.log(text)
})
console.log(text)

console.log("Haciendo cosas mientras se ejecuta el archivo...")

const text2 = fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
    console.log(text)
})
console.log(text2)