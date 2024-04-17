class Calculadora {
  suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(`Los valores ingresados deben ser números`);
    } else {
      return a + b;
    }
  }

  resta(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(`Los valores ingresados deben ser números`);
    } else {
      return a - b;
    }
  }

  multiplicacion(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(`Los valores ingresados deben ser números`);
    } else {
      return a * b;
    }
  }

  division(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(`Los valores ingresados deben ser números`);
    }
    if (b === 0) {
      throw new Error("Error: No se puede dividir por cero");
    } else {
      return a / b;
    }
  }
}

export default Calculadora;
