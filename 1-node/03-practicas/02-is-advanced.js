console.log("PRÁCTICA COMANDO DIRECTORIOS LISTAR ARCHIVOS")
const fs = require("node:fs/promises");
const { type } = require("node:os");
const path = require("path");

//?? Nullish coalescing operator: Operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es null o undefined, y en caso contrario retorna el operando de lado izquierdo.
//Folder tomará el valor del directorio actual o si escribrimos algunos en el 3er argumento de entrada es decir: node 02-is-advanced.js ⏩./0-conceptos ⏪
const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try {
        files = await fs.readdir((folder))
    } catch (error) {
        console.log(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map( async file => {
        const filePath = path.join(folder, file) // ⬅ directorio actual + archivo 
        let stats
        try{
            stats = await fs.stat(filePath) // Status - información del archivo
        }catch(error){
            console.log(`No se pudo leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd:' : "f:"
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleDateString()

        return `${fileType} ${file.padEnd(25)} ${fileSize.padEnd(10)} ${fileModified}` 
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)