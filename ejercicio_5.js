import { matematica } from "./modulo.js";
let a = parseInt(prompt("Ingresa un numero"));
let b = parseInt(prompt("Ingresa otro numero"));

let suma = matematica.suma(a, b);
let resta = matematica.resta(a, b);
let multiplicacion = matematica.multiplicacion(a, b);
let division = matematica.division(a, b);
console.log(suma, resta, division, multiplicacion);