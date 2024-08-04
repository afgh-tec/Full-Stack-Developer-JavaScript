// Igualdad (==)
console.log(5 == "5"); // true: "5" se convierte a número antes de comparar
console.log(null == undefined); // true: ambos se consideran "vacíos"
console.log(true == 1); // true: true se convierte a 1 antes de comparar
console.log(false == 0); // true: false se convierte a 0 antes de comparar

// Igualdad estricta (===)
console.log(5 === "5"); // false: uno es número y el otro string
console.log(true === 1); // false: uno es booleano y el otro número
console.log(false === 0); // false: uno es booleano y el otro número
console.log("hello" === "hello"); // true: ambos son strings iguales

// Desigualdad (!=)
console.log(5 != "5"); // false: "5" se convierte a número, así que son iguales
console.log(null != undefined); // false: ambos se consideran "vacíos"
console.log(true != 1); // false: true se convierte a 1 antes de comparar
console.log(false != 0); // false: false se convierte a 0 antes de comparar

// Desigualdad estricta (!==)
console.log(5 !== "5"); // true: uno es número y el otro string
console.log(true !== 1); // true: uno es booleano y el otro número
console.log(false !== 0); // true: uno es booleano y el otro número
console.log("hello" !== "hello"); // false: ambos son strings iguales

// Mayor que (>)
console.log(10 > 5); // true: 10 es mayor que 5
console.log(5 > 10); // false: 5 no es mayor que 10

// Mayor o igual que (>=)
console.log(10 >= 5); // true: 10 es mayor que 5
console.log(5 >= 5); // true: 5 es igual a 5
console.log(5 >= 10); // false: 5 no es mayor o igual que 10

// Menor que (<)
console.log(5 < 10); // true: 5 es menor que 10
console.log(10 < 5); // false: 10 no es menor que 5

// Menor o igual que (<=)
console.log(5 <= 10); // true: 5 es menor que 10
console.log(5 <= 5); // true: 5 es igual a 5
console.log(10 <= 5); // false: 10 no es menor o igual que 5