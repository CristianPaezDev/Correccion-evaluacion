const ame_expre = /((^[3])([4-7]))([0-9]{13})/;
const club = /((^[3])([00-05-6-8]))([0-9]){11,12}/;
const discover = /((^[6011]))([0-9]{12})/;
const mastercard = /((^[5])([1-5]))([0-9]){14}/;
const visa = /((^[4]))([0-9]{15})/;

function validarNumero(num_targe) {
  const soloNumeros = /^[0-9]+$/;
  return soloNumeros.test(num_targe);
}

export function validacion() {
  let num_targe;
  while (true) {
    num_targe = prompt("Ingrese el número de tarjeta:");
    if (num_targe === null) {
      console.log("Ha cancelado la operación.");
      return; // Salir de la función si el usuario cancela
    }
    if (validarNumero(num_targe) === false) {
      console.log(`Error: el número de tarjeta solo debe contener dígitos`);
    } else {
      break; // Salir del bucle si el número es válido
    }
  }

  if (ame_expre.test(num_targe) === true) {
    console.log(`Su tarjeta pertenece a American Express`);
  } else if (club.test(num_targe) === true) {
    console.log(`Su tarjeta pertenece a Diners Club`);
  } else if (discover.test(num_targe) === true) {
    console.log(`Su tarjeta pertenece a Discover`);
  } else if (mastercard.test(num_targe) === true) {
    console.log(`Su tarjeta pertenece a Mastercard`);
  } else if (visa.test(num_targe) === true) {
    console.log(`Su tarjeta pertenece a Visa`);
  } else {
    console.log(`Su número de tarjeta es inválido`);
  }
}

