function suma(num1, num2) {
    return num1 + num2;
  }
  
  function resta(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicacion(num1, num2) {
    return num1 * num2;
  }
  
  function division(num1, num2) {
    if (num2 === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return num1 / num2;
  }
  
  (function() {
    let continuar = true;
  
    while (continuar) {
      console.log("Seleccione una operación:");
      console.log("1. Suma");
      console.log("2. Resta");
      console.log("3. Multiplicación");
      console.log("4. División");
  
      const opcion = prompt("Ingrese el número de la operación:");
  
      let num1, num2;
  
      switch (opcion) {
        case "1":
          num1 = parseFloat(prompt("Ingrese el primer número:"));
          num2 = parseFloat(prompt("Ingrese el segundo número:"));
          console.log("El resultado es: " + suma(num1, num2));
          break;
        case "2":
          num1 = parseFloat(prompt("Ingrese el primer número:"));
          num2 = parseFloat(prompt("Ingrese el segundo número:"));
          console.log("El resultado es: " + resta(num1, num2));
          break;
        case "3":
          num1 = parseFloat(prompt("Ingrese el primer número:"));
          num2 = parseFloat(prompt("Ingrese el segundo número:"));
          console.log("El resultado es: " + multiplicacion(num1, num2));
          break;
        case "4":
          num1 = parseFloat(prompt("Ingrese el primer número:"));
          num2 = parseFloat(prompt("Ingrese el segundo número:"));
          try {
            console.log("El resultado es: " + division(num1, num2));
          } catch (error) {
            console.log("Error: " + error.message);
          }
          break;
        default:
          console.log("Operación no válida.");
          break;
      }
  
      const continuarRespuesta = prompt(
        "¿Desea realizar otra operación? (sí/no)"
      );
      continuar = continuarRespuesta.toLowerCase() === "sí";
    }
  })();
  