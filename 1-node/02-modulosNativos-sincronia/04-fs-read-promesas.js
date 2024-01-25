console.log(" PROMESAS ");
const fs = require("node:fs/promises");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("1: " + text);
});

fs.readFile("./archivo2.txt", "utf-8").then((text2) => {
  console.log("2: " + text2);
});

// ⬇ Utilidad para crear la versión de promesas en los módulos nativos que no tienen promesas nativas.
const { promisify } = require("node:util");
const fsNoPromise = require("node:fs");
const readFilePromise = promisify(fsNoPromise.readFile);
readFilePromise("./archivo.txt", "utf-8").then((text) => {
  console.log("promisify: " + text);
});
