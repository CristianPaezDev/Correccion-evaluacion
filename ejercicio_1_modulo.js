const ame_expre = /((^[3])([4-7]))([0-9]{13})/;
const club = /((^[3])([00-05-6-8]))([0-9]){11,12}/;
const discover = /((^[6011]))([0-9]{12})/;
const mastercard = /((^[5])([1-5]))([0-9]){14}/;
const visa = /((^[4]))([0-9]{15})/;

function validarNumero(num_targe) {
  const soloNumeros = /^[0-9]+$/;
  if (soloNumeros.test(num_targe) === false) {
    return false;
  }
  return true;
}

export function validacion(num_targe) {
  if (validarNumero(num_targe) == true) {
    if (ame_expre.test(num_targe) === true) {
      console.log(`Su targeta pertenece a American Express`);
    }
    else if (club.test(num_targe) === true) {
      console.log(`Su targeta pertenece a Diners Club`);
    }
    else if (discover.test(num_targe) === true) {
      console.log(`Su targeta pertenece a Discover`);
    }
    else if (mastercard.test(num_targe) === true) {
      console.log(`Su targeta pertenece a MAstercard`);
    }
    else if (visa.test(num_targe) === true) {
      console.log(`Su targeta pertenece a Visa`);
    }
    else {
      console.log(`Su numero de targeta es invalido`);
    }
  } else {
    console.log(`Error: el número de tarjeta solo debe contener dígitos`);
  }
}

