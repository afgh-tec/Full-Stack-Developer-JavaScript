// Definición de variables
let edad = 20;
let temperatura = 32;
let esEstudiante = true;

// Condicional if
if (edad >= 18) {
  console.log("Eres mayor de edad.");
}

// Condicional if...else
if (temperatura > 30) {
  console.log("Hace mucho calor.");
} else {
  console.log("La temperatura es agradable.");
}

// Condicional if...else if...else
if (edad < 18) {
  console.log("Eres menor de edad.");
} else if (edad >= 18 && edad <= 25) {
  console.log("Eres un adulto joven.");
} else {
  console.log("Eres un adulto.");
}

// Condicional anidado
if (esEstudiante) {
  if (edad < 18) {
    console.log("Eres un estudiante menor de edad.");
  } else {
    console.log("Eres un estudiante adulto.");
  }
} else {
  console.log("No eres estudiante.");
}