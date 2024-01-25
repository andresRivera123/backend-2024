console.log(" - MÓDULOS NATIVOS - ")
/* 
Al ser un entorno de ejecución, nos da una biblioteca enorme de modulos nativos como el sistema de archivos, sistema operativo, internet, etc
*/

/* OS INFO */
console.log("OS")
const os = require("node:os");
console.log("Información del sistema operativo");
console.log("---------------------------------");
console.log("Nombre del sistema operativo: ", os.platform());
console.log("Versión sistema operativo: ", os.release());
console.log("Arquitectura: ", os.arch());
console.log("CPUs: ", os.cpus());
console.log("Memoria libre: ", os.freemem()/1024/1024)//Para tener los megas se divide
console.log("Memoria total: ", os.totalmem()/1024/1024)
console.log("uptime ", os.uptime()/60/60)//Cuantos dias lleva encendido el dispositivo


/*PATH */

//path: módulo de node uqe nos da utilidades para trabajar con rutas de archivos y directorios.
console.log("- PATH -");
const path = require("path");

console.log("Separador SO: " + path.sep); //Esta propiedad nos devuelve el separador de las rutas del sistema operativo actual. macOS: / & Windows: \

//Unir rutas con path.join
const filePath = path.join("content", "subfolder", "text.txt");
console.log("Unir rutas: " + filePath)

//Nombre de un fichero con basename
const base = path.basename("/tmp/archives/andy/textSecret.txt")
console.log("Fichero: " + base)
//Nombre del fichero sin extensión
const fileName = path.basename("/tmp/archives/andy/textSecret.txt", ".txt")
console.log("Fichero sin extensión: " + fileName)

//Obtener la extención de un fichero
const extension = path.extname("pepe.jpg")
console.log("Extensión de pepe.jpg: " + extension)
