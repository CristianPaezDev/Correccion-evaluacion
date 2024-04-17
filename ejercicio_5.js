import Calculadora from "./ejercicio_5_modulo.js";

const calculadora = new Calculadora();

let a = parseFloat(prompt("Ingresa un número"));
let b = parseFloat(prompt("Ingresa otro número"));

try {
  let suma = calculadora.suma(a, b);
  let resta = calculadora.resta(a, b);
  let multiplicacion = calculadora.multiplicacion(a, b);
  let division = calculadora.division(a, b);
  console.log(`La suma: ${suma}, \nLa resta: ${resta}, \nLa división: ${division}, \nLa multiplicación: ${multiplicacion}`);
} catch (error) {
  console.error(error.message);
}
