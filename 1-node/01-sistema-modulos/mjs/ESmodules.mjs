/* 
    .js ➡ por defecto utilzia CommonJS
    .mjs ➡ para utilizar ES modules
    .cjs ➡ para utilizar CommonJS
*/

/* ⬇ Forma moderna y esta en la especificación de JS*/
//2) ECMAScript modules
import {sum, res, mul, div} from "./sum.mjs"
console.log(sum(1, 5))
console.log(res(10, 4))
console.log(mul(25, 2))
console.log(div(14, 7))