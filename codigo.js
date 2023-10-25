// Solicitar al usuario que ingrese su gasto total mensual
var gastoTotal = parseFloat(prompt("Ingrese su gasto total mensual:"));

// Determinar la evaluación basada en el gasto total
var evaluacion = "";
if (gastoTotal < 500) {
    evaluacion = "Gasto Muy Bajo";
} else if (gastoTotal >= 500 && gastoTotal <= 1000) {
    evaluacion = "Gasto Moderado";
} else {
    evaluacion = "Gasto Alto";
}

// Mostrar la evaluación en la consola del navegador
console.log("Evaluación de gastos: " + evaluacion);

// Mostrar mensaje de agradecimiento al usuario
console.log("¡Gracias por utilizar la calculadora de evaluación de gastos!");
