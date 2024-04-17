// Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.

function palabralarga(...palabras) {
    let palabraMasLarga = "";
    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
}

function palabras() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de palabras que desea ingresar:"));
    let palabras = [];
    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Ingrese la palabra " + (i + 1) + ":");
        palabras.push(palabra);
    }
    return palabras;
}

export function main() {
    let palabra = palabras();
    let palabraLarga = palabralarga(...palabra);
    console.log(`La palabra mas larga es ${palabraLarga}`);
}

