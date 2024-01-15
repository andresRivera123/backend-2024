/* FILE SYSTEM (FS)*/
const fs = require("node:fs")
const stats = fs.statSync('./archivo.txt');
console.log(
  stats.isFile(), //Es un fichero?
  stats.isDirectory(), //Es un directorio?
  stats.isSymbolicLink(), //es un enlace simbólico?
  stats.size //Tamaño en bytes
);
