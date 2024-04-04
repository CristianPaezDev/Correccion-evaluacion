function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  try {
    if (b === 0) {
      throw error;
    }
  } catch (error) {
    alert("no se puede dividir en 0")
  }
  return a / b;
}

export const matematica = {
  suma: suma,
  resta: resta,
  multiplicacion: multiplicacion,
  division: division
}
