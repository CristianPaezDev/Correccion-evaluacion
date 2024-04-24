// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.

// ... este es el parametro rest. funciona llenando una array.  permite que la función acepte cualquier número de argumentos numéricos

// let numerosorde = ordenarNumeros. Esta es la funcion expresada  Esto significa que la función no tiene un nombre definido en su contexto, sino que se refiere al nombre de la variable a la que está asignada. 

// numeros.sort((a, b) => a - b) ordena los elementos numéricos del array de menor a mayor...

let ordenarNumeros = function  (...numeros) {
    return numeros.sort((a, b) => b - a);
}

export function mayor() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numero);
    }

    let numerosorde = ordenarNumeros(...numeros);
    console.log("Números ordenados de mayor a menor:");

    console.table(numerosorde);
}
