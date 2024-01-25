console.log(" - RESUMEN SINCRONÍA - ");
console.log("1) Síncronico");
const fs = require("node:fs");
const textoSincronico1 = fs.readFileSync("./archivo.txt", "utf-8");
console.log(textoSincronico1);
const textoSincronico2 = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(textoSincronico2);

console.log("2) Asíncronico callback");
const texto = fs.readFileSync("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});
console.log(texto);
const texto2 = fs.readFileSync("./archivo2.txt", "utf-8", (err, text2) => {
  console.log(text2);
});
console.log(texto2);

console.log("3) Asíncronico secuencial");
const { readFile } = require("node:fs/promises");
(async () => {
  const textoAsinSec1 = await readFile("./archivo.txt", "utf-8");
  console.log("Asíncronico secuencial 1: " + textoAsinSec1);
  const textoAsinSec2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Asíncronico secuencial 2: " + textoAsinSec2);
})();

console.log("4) Asíncronico paralelo");

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("Asíncronico paralelo 1: " + text1);
  console.log("Asíncronico paralelo 2: " + text2);
});
