/* 
Módulos Nativos
Al ser un entorno de ejecución, nos da una biblioteca enorme de modulos nativos como el sistema de archivos, sistema operativo, internet, etc
*/

/* OS INFO */

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

