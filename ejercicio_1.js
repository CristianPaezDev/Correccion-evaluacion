// Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// • American Express: 15 dígitos y empieza por(34 – 37)
// • Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
// • Discover: tiene 16 dígitos y empieza por(6011)
// • Mastercard: tiene 16 dígitos y empieza por(51 – 55)
// • Visa: tiene: 16 dígitos y empieza por(4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito

let num_targe = prompt("Ingresa tu numero de targeta");

const ame_expre = /((^[3])([4-7]))([0-9]{13})/;
const club = /((^[3])([00-05-6-8]))([0-9]){11,12}/;
const discover = /((^[6011]))([0-9]{12})/;
const mastercard = /((^[5])([1-5]))([0-9]){14}/;
const visa = /((^[4]))([0-9]{15})/;

function validarNumero(num_targe) {
  const soloNumeros = /^[0-9]+$/;
  if (soloNumeros.test(num_targe) === false) {
    return `Error: el número de tarjeta solo debe contener dígitos`;
  }
  return true;
}

function validacion(num_targe) {
  if (validarNumero(num_targe) !== true) {
    return validarNumero(num_targe);
  }
  if (ame_expre.test(num_targe) === true) {
    return `Su targeta pertenece a American Express`;
  }
  else if (club.test(num_targe) === true) {
    return `Su targeta pertenece a Diners Club`;
  }
  else if (discover.test(num_targe) === true) {
    return `Su targeta pertenece a Discover`;
  }
  else if (mastercard.test(num_targe) === true) {
    return `Su targeta pertenece a MAstercard`;
  }
  else if (visa.test(num_targe) === true) {
    return `Su targeta pertenece a Visa`;
  }
  else {
    return `Su numero de targeta es invalido`;
  }
}

alert(validacion(num_targe));