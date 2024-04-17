// Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.

function ordenarNumeros(...numeros) {
    return numeros.sort((a, b) => b - a);
}

export function mayor() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numero);
    }
    let numerosOrdenados = ordenarNumeros(...numeros);
    console.log("Números ordenados de mayor a menor:");

    console.table(numerosOrdenados);
}
