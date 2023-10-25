let number = prompt('Ingrese un número entero positivo:');
let sum = 0;

if (Number.isInteger(+number) && +number > 0) {
  for (let i = 1; i <= +number; i++) {
    sum += i;
  }
  console.log('La suma total es:', sum);
} else 
  console.error('Error: Ingrese un número entero positivo válido.');