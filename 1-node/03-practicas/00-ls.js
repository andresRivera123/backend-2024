console.log("PRÁCTICA LS");
/* Por lo general al escribir ls en el terminar nos lista los archivos y directorios en la ubicación actual. */
const fs = require("node:fs");
//readdir: Lee el directorio, debemos especificar la ruta.
//"." y __dirname son la ruta actual
console.log("EJERCICIO 1: Directorios de la ruta actual");
fs.readdir(".", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});

/* EJERCICIO 2 */
const path = require("path");
fs.readdir(path.join("1-node", "02-modulosNativos-sincronia"), (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("EJERCICIO 2: Devolver solo los nombres de archivos .md");
  files.forEach((file) => {
    if(path.extname(file) === ".txt"){
      console.log(file)
    }
  });
});