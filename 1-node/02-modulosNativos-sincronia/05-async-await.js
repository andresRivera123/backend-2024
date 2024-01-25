console.log(" ASYNC - AWAIT ");
/* Existen dos formas de utilizar async await en node.js */
// 1) Cambiar la extensión del archivo a .mjs

/* import { readFile } from 'node:fs/promises';
const text = await readFile("./archivo.txt", 'utf-8')
console.log(text)

Este método se puede utilizar los await de la forma clásica porque .mjs soporta los await en el cuerpo del archivo, se llama top level await */


//2) Función autoinvocada: LITERALMENTE es una función que envolvemos con parentesis y la estamos invocando justo cuando la creamos, eso se llama IIFE: Inmediatly Invoked Function Expression.
const { readFile } = require("node:fs/promises");
(async () => {
  const text1 = await readFile("./archivo.txt", "utf-8");
  console.log("archivo1: " + text1);
  const text2 = await readFile("./archivo2.txt", "utf-8")
  console.log("archivo2: " + text2)
})();


console.log(" ASYNC - AWAIT PARALELO");
/* Esto es más rápido lo vemos en ejecución, podemos controlar las salidas. */
Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8")
]).then(([text, secondText]) => {
    console.log(text)
    console.log(secondText)
})
