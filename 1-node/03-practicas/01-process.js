console.log(" - PROCESS - ")
//proccess: objeto global que proporcina información y control de ejecución/proceso actual.

//argv: devuelve una matriz que contiene los argumentos de la línea de comandos/argumentos de entrada cuando se inició 
/* Ejm: 
comando: node 01-process.js one two=three four 
salida: 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ANDYK\\Documents\\GitHub\\backend-2024\\01-process.js',
  'one',
  'two=three',
  'four'
]
*/
console.log(process.argv)

//controlar el proceso y su salida
//process.exit(0) 0: todo bien | 1: error
process.on('exit', () => {
    //Limpiar recursos, consola, comprobar errores
})

//cwd: current working directory, desde que carpeta estamos ejecutando el proceso, cual es el directorieo en el que estamos trabajando
console.log(`Current directory: ${process.cwd()}`);

/* env: variables de entorno */
process.env.foo = 'Soy un env';
console.log(process.env.foo);