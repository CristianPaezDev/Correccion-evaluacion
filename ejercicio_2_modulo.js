// Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:
// a.Sumar los números
// b.Contar los números primos
// c.Contar los números pares
// d.Calcular el promedio de los números primos
// e.Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos





// Se ejecuta el bloque de código dentro del do al menos una vez, sin importar si la condición es verdadera o falsa.
// Después de ejecutar el bloque de código dentro del do, se evalúa la condición especificada en el while.
// Si la condición es verdadera, el bloque de código se ejecuta nuevamente y el proceso se repite.
// Si la condición es falsa, el bucle do-while se detiene y la ejecución del programa continúa con la primera instrucción después del bucle.

function solicitarNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de números a ingresar:"));
    for (let i = 0; i < cantidad; i++) {
        let numero;
        do {
            numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
            if (isNaN(numero)) {
                console.log("Error: Debes ingresar un número válido.");
            }
        } while (isNaN(numero)); 
        numeros.push(numero);
    }
    return numeros;
}


function sumarNumeros(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

function contarNumerosPrimos(numeros) {
    let contadorPrimos = 0;
    for (let numero of numeros) {
        if (esPrimo(numero)) {
            contadorPrimos++;
        }
    }
    return contadorPrimos;
}

function contarNumerosPares(numeros) {
    let contadorPares = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            contadorPares++;
        }
    }
    return contadorPares;
}

function calcularPromedio(numeros) {
    let suma = sumarNumeros(numeros);
    return suma / numeros.length;
}

function calcularPromedioPrimos(numeros) {
    let primos = numeros.filter(numero => esPrimo(numero));
    if (primos.length === 0) {
        return 0;
    }
    return calcularPromedio(primos);
}

function calcularPromedioPares(numeros) {
    let pares = numeros.filter(numero => numero % 2 === 0);
    if (pares.length === 0) {
        return 0;
    }
    return calcularPromedio(pares);
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

export function main() {
    let numeros = solicitarNumeros();
    let opcion = prompt(`Seleccione la operación a realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de los números pares`).toLowerCase();

    switch (opcion) {
        case "a":
            console.log("La suma de los números es:", sumarNumeros(numeros));
            break;
        case "b":
            console.log("La cantidad de números primos es:", contarNumerosPrimos(numeros));
            break;
        case "c":
            console.log("La cantidad de números pares es:", contarNumerosPares(numeros));
            break;
        case "d":
            console.log("El promedio de los números primos es:", calcularPromedioPrimos(numeros));
            break;
        case "e":
            console.log("El promedio de los números pares es:", calcularPromedioPares(numeros));
            break;
        default:
            console.log("Opción no válida.");
    }
}

// main();
