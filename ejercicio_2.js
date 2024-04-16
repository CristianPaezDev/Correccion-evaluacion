// Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:
// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e.Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos

let selecciona = parseFloat(prompt("Ingresa una opcion (a. Sumar \nb. Contar los numeros primos \n c. Contar los numeros pares \nd. Calcular el promedio de los numeros primos)"))

// import * as programa from './programa.js';

// function main() {
//     const numeros = [1, 2, 3, 4, 5]; // Aquí puedes ingresar los números
//     console.log('Suma de los números:', programa.sumarNumeros(numeros));
//     console.log('Cantidad de números primos:', programa.primos(numeros));
//     console.log('Cantidad de números pares:', programa.pares(numeros));
//     console.log('Promedio de los números primos:', programa.promedio_primos(numeros));
//     console.log('Promedio de los números pares:', programa.promedio_pares(numeros));
// }

// main();

// export function sumarNumeros(numeros) {
//     let suma = 0;
//     for (const num of numeros) {
//         suma += num;
//     }
//     return suma;
// }

// export function primos(numeros) {
//     let contadorPrimos = 0;
//     for (const num of numeros) {
//         if (esPrimo(num)) {
//             contadorPrimos++;
//         }
//     }
//     return contadorPrimos;
// }

// export function pares(numeros) {
//     let contadorPares = 0;
//     for (const num of numeros) {
//         if (num % 2 === 0) {
//             contadorPares++;
//         }
//     }
//     return contadorPares;
// }

// export function promedio_primos(numeros) {
//     const primos = numeros.filter(num => esPrimo(num));
//     if (primos.length === 0) return 0;
//     const suma = primos.reduce((total, num) => total + num, 0);
//     return suma / primos.length;
// }

// export function promedio_pares(numeros) {
//     const pares = numeros.filter(num => num % 2 === 0);
//     if (pares.length === 0) return 0;
//     const suma = pares.reduce((total, num) => total + num, 0);
//     return suma / pares.length;
// }
