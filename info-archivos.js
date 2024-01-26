const { promises } = require("node:dns");
const fs = require("node:fs/promises");
const path = require("path");
const { exit } = require("process");

let carpeta = process.argv[2] ?? __dirname;

async function listarArchivos(carpeta) {
  let archivo;
  try {
    archivo = await fs.readdir(carpeta);
  } catch (err) {
    console.log("No se encontro la carpeta: " + carpeta);
    exit(1);
  }

  const leerDirectorios = archivo.map(async (item) => {
    const pathArchivos = path.join(carpeta, item);
    let stats;
    try {
      stats = await fs.stat(pathArchivos);
    } catch (error) {
      console.log("No se pudo leer el archivo: " + pathArchivos);
      exit(1);
    }

    const isDirectory = stats.isDirectory
    const fileType = isDirectory ? "d": "f"
    return (`${fileType} ${pathArchivos.padEnd(20)}` )
  });
  const informacionArchivos = await Promise.all(filePromise)
}

listarArchivos(carpeta);
