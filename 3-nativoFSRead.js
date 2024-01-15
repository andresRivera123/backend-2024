/* FS Read file */
console.log("Leyendo el primer archivo...")
const fs = require("node:fs");
const text = fs.readFileSync("./archivo.txt", "utf-8"); //Por defecto te devuelve un buffer, memoria con byte por eso colocamos el utf-8.
console.log(text);


console.log("Leyendo el segundo archivo...")
const secondText = fs.readFileSync("./archivo2.txt", "utf-8"); //Por defecto te devuelve un buffer, memoria con byte por eso colocamos el utf-8.
console.log(secondText);
